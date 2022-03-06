export interface ProjectType {
  title: string;
  priority: number;
  thumbnail: string;
  summary: ProjectSummaryType;
  skills: ProjectSkillType[];
  content: string;
  features: ProjectFeatureType[];
  images: ImageBundle[];
  takeaways: ProjectTakeawayType[];
}

export interface ProjectSummaryType {
  subject: string;
  period: PeriodType;
  participants: {
    count: number;
    description?: string;
  };
  githubLink?: string;
  goal: string;
}

export interface PeriodType {
  start: string;
  end: string;
}

export interface ProjectSkillType {
  name: string;
  image: string;
  isByMe: boolean;
}

export interface ProjectFeatureType {
  title: string;
  isByMe: boolean;
  descriptions?: string[];
}

export interface ImageBundle {
  description?: string;
  imageUrls?: string[];
}

export interface ProjectTakeawayType {
  title: string;
  description: string;
}
