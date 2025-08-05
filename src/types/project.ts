import { TechSkill } from "./techSkill";

export type Project = Readonly<{
  id: string;
  title: string;
  summary: string;
  links: {
    live: string;
    github: string;
    demo: string;
  };
  image: string;
  tags: string[];
  techSkillsUsed: ReadonlyArray<TechSkill>;
  techSkillsExposed: ReadonlyArray<TechSkill>
  detailedExplanation: string;
  features: ReadonlyArray<{
    name: string;
    description: string;
    myContribution: boolean;
  }>;
  teamSize: string;
  role: string;
  period: string;
  troubleshoots:ReadonlyArray< {
    title: string;
    problem: string;
    solution: string;
  }>;
}>