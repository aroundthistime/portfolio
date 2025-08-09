import { Card, CardContent } from '@/components/ui/card';
import { Project } from '@/types/project';

type Props = Pick<Project, 'detailedExplanation'>;

const ProjectOverviewSection = ({ detailedExplanation }: Props) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        프로젝트 내용
      </h2>
      <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="prose max-w-none">
            {detailedExplanation.split('\n\n').map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ProjectOverviewSection;
