'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Switch from '@/components/ui/Switch';
import { Project } from '@/types/project';
import { partition } from '@/utils/array';
import { useMemo, useState } from 'react';

type Props = Pick<Project, 'features'>;

const ProjectFeaturesSection = ({ features }: Props) => {
  const [showMyContributionsOnly, setShowMyContributionsOnly] = useState(false);
  const [myContributionFeatures, otherFeatures] = useMemo(
    () => partition(features, feature => feature.myContribution),
    [features],
  );

  const allFeatures = useMemo(
    // prioritize my contributions
    () => [...myContributionFeatures, ...otherFeatures],
    [myContributionFeatures, otherFeatures],
  );

  const featuresToShow = showMyContributionsOnly
    ? myContributionFeatures
    : allFeatures;

  return (
    <section>
      <div className="mb-4 md:mb-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Project Features
        </h2>
        <div className="flex items-center space-x-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Show my contributions only
          </span>
          <Switch
            checked={showMyContributionsOnly}
            onCheckedChange={setShowMyContributionsOnly}
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {featuresToShow.map(feature => (
          <Card
            key={feature.name}
            className={`${
              feature.myContribution ? 'border-blue-200 bg-blue-50/50' : ''
            } border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm`}>
            <CardHeader className="pb-2">
              <div className="flex flex-col-reverse gap-1 sm:flex-row sm:items-center sm:justify-between">
                <CardTitle className="text-base text-gray-900 dark:text-white">
                  {feature.name}
                </CardTitle>
                {feature.myContribution && (
                  <Badge className="bg-blue-500 text-white hover:bg-blue-600 text-xs w-fit">
                    Contributed
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
