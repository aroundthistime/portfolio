import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MY_MAIN_ROLE } from '@/constants/contentDB/aboutMe';
import { Project } from '@/types/project';
import { formatPeriod } from '@/utils/date';
import { Briefcase, Calendar, Users } from 'lucide-react';
import { useMemo } from 'react';

interface Props {
  project: Project;
}

const ProjectMetaSection = ({ project }: Props) => {
  const formattedPeriod = useMemo(() => {
    const startDate = new Date(project.period.startDate);
    const endDate = project.period.endDate
      ? new Date(project.period.endDate)
      : undefined;
    return formatPeriod(startDate, endDate);
  }, [project.period]);

  const parseTeamSize = () => {
    if (typeof project.teamSize === 'number') {
      return project.teamSize;
    }

    return `${project.teamSize.min} ~ ${project.teamSize.max}`;
  };

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        프로젝트 정보
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center text-gray-900 dark:text-white">
              <Calendar className="h-5 w-5 text-purple-500 mr-2" />
              참여 기간
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {formattedPeriod}
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center text-gray-900 dark:text-white">
              <Users className="h-5 w-5 text-blue-500 mr-2" />팀 규모
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {`${parseTeamSize()}명`}
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center text-gray-900 dark:text-white">
              <Briefcase className="h-5 w-5 text-green-500 mr-2" />
              담당 역할
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 font-medium">
              {project.role ?? MY_MAIN_ROLE}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectMetaSection;
