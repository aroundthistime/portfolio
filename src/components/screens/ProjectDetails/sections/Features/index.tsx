import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Project } from '@/types/project';

type Props = Pick<Project, 'features'>;

const ProjectFeaturesSection = ({ features }: Props) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Project Features
      </h2>
      <div className="grid md:grid-cols-2 gap-4">
        {features.map(feature => (
          <Card
            key={feature.name}
            className={`${
              feature.myContribution ? 'border-blue-200 bg-blue-50/50' : ''
            } border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm`}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base text-gray-900 dark:text-white">
                  {feature.name}
                </CardTitle>
                {feature.myContribution && (
                  <Badge className="bg-blue-500 text-white hover:bg-blue-600 text-xs">
                    My Contribution
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProjectFeaturesSection;
