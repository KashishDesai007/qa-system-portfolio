export interface NavLink {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  coverage: number;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  type: string;
  description: string;
  responsibilities: string[];
  tools: string[];
  status: "PASSED" | "CRITICAL_BUG_FOUND" | "IN_PROGRESS";
  bugsFound: number;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  current: boolean;
  responsibilities: string[];
  achievements: string[];
}

export interface WorkflowStep {
  id: number;
  label: string;
  icon: string;
  description: string;
}
