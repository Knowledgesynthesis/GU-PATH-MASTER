export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  color: string;
}

export interface Section {
  id: string;
  title: string;
  content: string;
  subsections?: Subsection[];
}

export interface Subsection {
  id: string;
  title: string;
  content: string;
  highlights?: string[];
  pitfalls?: string[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: string;
  rationale: string;
  category?: string;
}

export interface Case {
  id: string;
  site: string;
  title: string;
  features: string[];
  ihc?: Record<string, string>;
  molecular?: string;
  question: string;
  options: string[];
  correctAnswer: string;
  rationale: string;
}

export interface InteractiveTool {
  id: string;
  title: string;
  description: string;
  category: string;
}
