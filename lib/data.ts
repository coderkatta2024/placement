import { Domain, JobListing, RoadmapMilestone, StudentProfile } from "./types";

export const demoStudent: StudentProfile = {
  name: "Aarav Sharma",
  branch: "B.Tech - Information Technology",
  cgpa: 8.3,
  interests: ["Problem Solving", "AI Products", "System Design"],
  aptitude: { quant: 78, logic: 84, verbal: 69 },
  psychometric: { openness: 82, conscientiousness: 75, extroversion: 58, resilience: 80 },
  technicalSkills: {
    "Data Structures": 72,
    "Python": 80,
    "Web Development": 68,
    "Machine Learning": 64,
    "Cloud Basics": 55,
    "Communication": 70,
  },
};

export const domainWeights: Record<Domain, Record<string, number>> = {
  "Software Development": { quant: 0.18, logic: 0.2, verbal: 0.07, coding: 0.35, systems: 0.2 },
  "Data Science": { quant: 0.24, logic: 0.2, verbal: 0.08, coding: 0.24, systems: 0.24 },
  "AI/ML": { quant: 0.24, logic: 0.2, verbal: 0.06, coding: 0.28, systems: 0.22 },
  Cybersecurity: { quant: 0.15, logic: 0.25, verbal: 0.08, coding: 0.26, systems: 0.26 },
  "Cloud Computing": { quant: 0.14, logic: 0.2, verbal: 0.08, coding: 0.26, systems: 0.32 },
  "Core Engineering": { quant: 0.24, logic: 0.24, verbal: 0.06, coding: 0.14, systems: 0.32 },
  "Product Management": { quant: 0.14, logic: 0.18, verbal: 0.24, coding: 0.14, systems: 0.3 },
  "UI/UX": { quant: 0.08, logic: 0.14, verbal: 0.24, coding: 0.12, systems: 0.42 },
  DevOps: { quant: 0.14, logic: 0.19, verbal: 0.08, coding: 0.24, systems: 0.35 },
};

export const domainRoadmaps: Record<Domain, RoadmapMilestone[]> = {
  "Software Development": [
    { stage: "Beginner", title: "Programming & DSA Foundations", durationWeeks: 6, prerequisites: ["Basic math"], outcomes: ["Arrays, strings, recursion", "Git/GitHub"] },
    { stage: "Intermediate", title: "Backend + Frontend Engineering", durationWeeks: 8, prerequisites: ["JavaScript or Java"], outcomes: ["REST APIs", "Databases", "React + Next.js"] },
    { stage: "Advanced", title: "System Design & Interview Sprint", durationWeeks: 6, prerequisites: ["Project experience"], outcomes: ["Scalable architecture", "Company-wise prep"] },
  ],
  "Data Science": [
    { stage: "Beginner", title: "Statistics, Python, Data Wrangling", durationWeeks: 6, prerequisites: ["Class 12 math"], outcomes: ["Pandas/Numpy", "EDA"] },
    { stage: "Intermediate", title: "Machine Learning Projects", durationWeeks: 8, prerequisites: ["Linear algebra basics"], outcomes: ["Regression/classification", "Model validation"] },
    { stage: "Advanced", title: "MLOps + Portfolio", durationWeeks: 6, prerequisites: ["2 ML projects"], outcomes: ["Deployment", "Case interview readiness"] },
  ],
  "AI/ML": [
    { stage: "Beginner", title: "Math for AI + Python", durationWeeks: 6, prerequisites: ["Calculus basics"], outcomes: ["Vectorization", "Data pipelines"] },
    { stage: "Intermediate", title: "Deep Learning & NLP", durationWeeks: 10, prerequisites: ["ML fundamentals"], outcomes: ["Neural networks", "Transformers"] },
    { stage: "Advanced", title: "LLM Apps & Research Methods", durationWeeks: 6, prerequisites: ["PyTorch"], outcomes: ["RAG systems", "Evaluation frameworks"] },
  ],
  Cybersecurity: [],
  "Cloud Computing": [],
  "Core Engineering": [],
  "Product Management": [],
  "UI/UX": [],
  DevOps: [],
};

export const curatedResources = {
  free: [
    "NPTEL Career Edge modules",
    "freeCodeCamp full-stack path",
    "Khan Academy quantitative aptitude",
    "Roadmap.sh domain maps",
  ],
  paid: ["Coursera Professional Certificates", "Udemy placement bootcamps"],
  practice: ["LeetCode", "HackerRank", "IndiaBix aptitude", "InterviewBit"],
};

export const certifications = [
  { name: "AWS Certified Cloud Practitioner", cost: "₹8,000", roi: "High for cloud/support roles", difficulty: "Easy-Medium" },
  { name: "Google Data Analytics Professional Certificate", cost: "₹2,400/month", roi: "Strong for analyst roles", difficulty: "Medium" },
  { name: "Microsoft AZ-204", cost: "₹4,800", roi: "High for full-stack/.NET jobs", difficulty: "Medium-Hard" },
];

export const jobFeed: JobListing[] = [
  {
    title: "SDE Intern",
    company: "FinEdge Technologies",
    source: "Company Careers",
    stipendOrCtc: "₹45,000/month",
    eligibility: "B.Tech 2026, CGPA 7+",
    deadline: "2026-03-14",
    trustScore: 93,
    matchScore: 88,
  },
  {
    title: "Data Analyst Trainee",
    company: "InsightLoop",
    source: "Internship Platform",
    stipendOrCtc: "₹7.2 LPA",
    eligibility: "Any CS/IT branch",
    deadline: "2026-03-18",
    trustScore: 89,
    matchScore: 81,
  },
  {
    title: "Graduate Engineer Trainee",
    company: "Bharat Motion Systems",
    source: "Govt. portal",
    stipendOrCtc: "₹6.8 LPA",
    eligibility: "ECE/EEE/ME",
    deadline: "2026-03-23",
    trustScore: 95,
    matchScore: 74,
  },
];
