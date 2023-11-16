import { NextApiRequest, NextApiResponse } from 'next';
import { PROJECTS } from '@/dummyData/project';
import { ProjectBriefDto } from '@/types/dto/ProjectDto';
import { localizeData } from '@/utils/localization';
import { MultiLanguageString } from '@/types/utilTypes/Localization';

type ResponseData = {
  projects: ProjectBriefDto[];
};

const handler = (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
  const { 'accept-language': locale } = req.headers;

  const briefProjectsBeforeLocalization = Object.values(PROJECTS).map(
    project => {
      return {
        uuid: project.uuid,
        title: project.title,
        logo: project.logo,
        brief: project.summary.brief,
      };
    },
  );

  const briefProjects = localizeData(
    briefProjectsBeforeLocalization,
    locale as keyof MultiLanguageString,
  );

  res.status(200).json({
    projects: briefProjects,
  });
};

export default handler;
