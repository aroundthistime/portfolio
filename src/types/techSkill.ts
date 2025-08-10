export const TECH_SKILL_GROUPS = {
  languagesAndFrameworks: 'Languages & Frameworks',
  stateManagement: 'State Management',
  styling: 'Styling & UI',
  apiAndProtocol: 'API & Protocol',
  testing: 'Testing',
  database: 'Database',
  infrastructure: 'Devops & Infrastructure',
  threeD: '3D & Web Graphics',
  buildTools: 'Build Tools',
  workingTools: 'Working Tools',
} as const;

export type TechSkillGroup =
  (typeof TECH_SKILL_GROUPS)[keyof typeof TECH_SKILL_GROUPS];

export interface TechSkill {
  name: string;
  iconUrl?: string;
  group?: TechSkillGroup;
}
