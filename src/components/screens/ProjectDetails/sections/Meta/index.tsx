import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/types/project';
import { Briefcase, Calendar, Users } from 'lucide-react';

interface Props {
  project: Project;
}

const ProjectMetaSection = ({ project }: Props) => {
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
              {project.period}
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
              {project.teamSize}명
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
              {project.role}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProjectMetaSection;
