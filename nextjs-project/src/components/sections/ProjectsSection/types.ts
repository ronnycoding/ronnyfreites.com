import { type LucideIcon } from 'lucide-react';

export interface CodeSnippet {
  title: string;
  language: string;
  code: string;
  description?: string;
}

export interface ArchitectureDiagram {
  title: string;
  description: string;
  imageUrl?: string;
  components: string[];
}

export interface ProjectMetrics {
  label: string;
  value: string;
  description?: string;
}

export interface CaseStudy {
  challenge: string;
  solution: string;
  results: string[];
  architecture?: ArchitectureDiagram;
  codeSnippets?: CodeSnippet[];
  metrics?: ProjectMetrics[];
  lessons: string[];
}

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  highlights: string[];
  techStack: string[];
  url: string;
  githubUrl?: string;
  category: 'AI/ML' | 'Open Source' | 'E-commerce' | 'Enterprise';
  featured: boolean;
  icon: LucideIcon;
  caseStudy?: CaseStudy;
}
