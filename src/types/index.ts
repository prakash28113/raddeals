export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Project {
  id: number;
  title: string;
  category: 'design' | 'development';
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}