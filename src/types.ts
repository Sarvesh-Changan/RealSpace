export interface ColorPaletteItem {
  name: string;
  hex: string;
}

export interface ProjectTimelineStep {
  phase: string;
  title: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Specialty' | 'Kitchen';
  location: string;
  client: string;
  budget: string;
  year: string;
  area: string;
  description: string;
  mainImage: string;
  gallery: string[];
  timeline: ProjectTimelineStep[];
  materials: string[];
  colorPalette: ColorPaletteItem[];
  beforeImage: string;
  afterImage: string;
}

export interface Service {
  id: string;
  title: string;
  iconName: string;
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  processSteps: string[];
  gallery: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Review {
  author: string;
  rating: number;
  text: string;
  date: string;
  source: 'Justdial' | 'Google' | 'Verified Client';
  projectType: string;
}
