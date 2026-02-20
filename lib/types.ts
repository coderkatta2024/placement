export type Domain =
  | "Software Development"
  | "Data Science"
  | "AI/ML"
  | "Cybersecurity"
  | "Cloud Computing"
  | "Core Engineering"
  | "Product Management"
  | "UI/UX"
  | "DevOps";

export interface StudentProfile {
  name: string;
  branch: string;
  cgpa: number;
  interests: string[];
  aptitude: { quant: number; logic: number; verbal: number };
  psychometric: { openness: number; conscientiousness: number; extroversion: number; resilience: number };
  technicalSkills: Record<string, number>;
}

export interface DomainScore {
  domain: Domain;
  score: number;
  confidence: number;
  strengths: string[];
  weaknesses: string[];
  improvements: string[];
}

export interface RoadmapMilestone {
  stage: "Beginner" | "Intermediate" | "Advanced";
  title: string;
  durationWeeks: number;
  prerequisites: string[];
  outcomes: string[];
}

export interface JobListing {
  title: string;
  company: string;
  source: string;
  stipendOrCtc: string;
  eligibility: string;
  deadline: string;
  trustScore: number;
  matchScore: number;
}
