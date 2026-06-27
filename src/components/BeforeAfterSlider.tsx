import { useState, useRef, useEffect } from 'react';
import { Eye } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  heightClass?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  heightClass = 'h-[350px] md:h-[500px]'
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div
      id="before-after-slider-wrapper"
      ref={containerRef}
      className={`relative w-full ${heightClass} overflow-hidden rounded-none select-none cursor-ew-resize border border-border-luxury`}
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="Transformed interior - After"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
        referrerPolicy="no-referrer"
      />
      <div className="absolute right-4 bottom-4 z-10 bg-[#1C1C1C]/80 px-3 py-1 text-xs font-mono text-white rounded-none uppercase tracking-widest backdrop-blur-sm">
        After Redesign
      </div>

      {/* Before Image (Foreground, Clipped) */}
      <div
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Original interior - Before"
          className="absolute inset-0 h-full w-full object-cover max-w-none"
          style={{ width: containerRef.current?.getBoundingClientRect().width }}
          draggable={false}
          referrerPolicy="no-referrer"
        />
        <div className="absolute left-4 bottom-4 z-10 bg-gold-luxury/80 px-3 py-1 text-xs font-mono text-white rounded-none uppercase tracking-widest backdrop-blur-sm">
          Before Construction
        </div>
      </div>

      {/* Divider Bar */}
      <div
        className="absolute inset-y-0 z-20 w-1 bg-white cursor-ew-resize flex items-center justify-center"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle */}
        <div className="absolute flex h-10 w-10 items-center justify-center rounded-full bg-white text-text-luxury shadow-xl slider-handle-glow border border-gold-luxury">
          <Eye className="h-4 w-4 text-gold-luxury animate-pulse" />
        </div>
      </div>
    </div>
  );
}
