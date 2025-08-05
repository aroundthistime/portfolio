const TECH_SKILL_GROUPS = {
  languagesAndFrameworks: 'Languages & Frameworks',
  stateManagement: 'State Management',
  styling: 'Styling & UI',
  testing: 'Testing',
  database: 'Database',
  infrastructure: 'Devops & Infrastructure',
  threeD: '3D & Web Graphics',
  packageManagement: 'Package Management',
  buildTools: 'Build Tools',
  tools: 'Working Tools',
}

export type TechSkillGroup = keyof typeof TECH_SKILL_GROUPS;

export interface TechSkill {
  name: string;
  iconUrl?: string;
  group?: TechSkillGroup;
}