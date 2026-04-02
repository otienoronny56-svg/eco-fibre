export interface WiFiPackage {
  speed: string;
  price: string;
  type: 'home' | 'business';
  features: string[];
}

export interface CoverageArea {
  region: string;
  estates: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  date: string;
  image: string;
  baseViews: number;
}

export interface CareerOpportunity {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  stars?: number;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface CommunityPoster {
  id: number;
  title: string;
  subtitle?: string;
  message: string;
  backgroundImage: string;
  category: 'Holiday' | 'Event' | 'Announcement';
  date: string;
}
