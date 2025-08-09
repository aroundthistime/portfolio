import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/types/project';
import { Lightbulb } from 'lucide-react';

type Props = Required<Pick<Project, 'troubleshoots'>>;

const ProjectTroubleshootsSection = ({ troubleshoots }: Props) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        문제 해결 과정
      </h2>
      <div className="space-y-8">
        {troubleshoots.map((item, index) => (
          <Card
            key={index}
            className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl flex items-center text-gray-900 dark:text-white">
                <Lightbulb className="h-6 w-6 text-yellow-500 mr-3" />
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  The Challenge:
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.problem}
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                  My Solution:
                </h4>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {item.solution}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectTroubleshootsSection;
