import { NextApiRequest, NextApiResponse } from 'next';
import { PROJECTS } from '@/dummyData/project';
import { ProjectBriefDto } from '@/types/dto/ProjectDto';

type ResponseData = {
  projects: ProjectBriefDto[];
};

const handler = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const briefProjects: ProjectBriefDto[] = Object.values(PROJECTS).map(
    project => {
      return {
        uuid: project.uuid,
        title: project.title,
        logo: project.logo,
        brief: project.summary.brief,
      };
    },
  );

  res.status(200).json({
    projects: briefProjects,
  });
};

export default handler;
