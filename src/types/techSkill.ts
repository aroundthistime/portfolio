export const TECH_SKILL_GROUPS = {
  languagesAndFrameworks: 'Languages & Frameworks',
  stateManagement: 'State Management',
  styling: 'Styling & UI',
  testing: 'Testing',
  database: 'Database',
  infrastructure: 'Devops & Infrastructure',
  threeD: '3D & Web Graphics',
  packageManagement: 'Package Management',
  buildTools: 'Build Tools',
  workingTools: 'Working Tools',
  payment: 'Payment',
} as const;

export type TechSkillGroup = (typeof TECH_SKILL_GROUPS)[keyof typeof TECH_SKILL_GROUPS];

export interface TechSkill {
  name: string;
  iconUrl?: string;
  group?: TechSkillGroup;
}
