'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import {
  ExternalLink,
  Github,
  CheckCircle,
  Lightbulb,
  Code2,
  Users,
  Maximize2,
  X,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useProjectModal } from './screens/Home/sections/Projects/context';

// Technology icons mapping
const techIcons = {
  'Next.js': '⚛️',
  'Next.js 14': '⚛️',
  React: '⚛️',
  'React 18': '⚛️',
  'React Native': '📱',
  'React Native Web': '📱',
  TypeScript: '🔷',
  JavaScript: '🟨',
  'Tailwind CSS': '🎨',
  'Styled Components': '💅',
  CSS: '🎨',
  HTML: '🌐',
  'Node.js': '🟢',
  Python: '🐍',
  PostgreSQL: '🐘',
  MongoDB: '🍃',
  Redis: '🔴',
  Docker: '🐳',
  AWS: '☁️',
  Git: '📝',
  Jest: '🃏',
  Cypress: '🌲',
};

// Technology grouping
const groupTechnologies = (technologies: string[]) => {
  const groups = {
    'Frontend Frameworks': [] as string[],
    'Styling & UI': [] as string[],
    'Backend & Database': [] as string[],
    Testing: [] as string[],
    'DevOps & Tools': [] as string[],
    Other: [] as string[],
  };

  technologies.forEach(tech => {
    const lowerTech = tech.toLowerCase();
    if (
      lowerTech.includes('react') ||
      lowerTech.includes('next') ||
      lowerTech.includes('vue') ||
      lowerTech.includes('angular')
    ) {
      groups['Frontend Frameworks'].push(tech);
    } else if (
      lowerTech.includes('css') ||
      lowerTech.includes('tailwind') ||
      lowerTech.includes('styled') ||
      lowerTech.includes('sass') ||
      lowerTech.includes('emotion')
    ) {
      groups['Styling & UI'].push(tech);
    } else if (
      lowerTech.includes('node') ||
      lowerTech.includes('python') ||
      lowerTech.includes('postgresql') ||
      lowerTech.includes('mongodb') ||
      lowerTech.includes('redis') ||
      lowerTech.includes('mysql') ||
      lowerTech.includes('graphql')
    ) {
      groups['Backend & Database'].push(tech);
    } else if (
      lowerTech.includes('jest') ||
      lowerTech.includes('cypress') ||
      lowerTech.includes('testing') ||
      lowerTech.includes('test')
    ) {
      groups['Testing'].push(tech);
    } else if (
      lowerTech.includes('docker') ||
      lowerTech.includes('aws') ||
      lowerTech.includes('jenkins') ||
      lowerTech.includes('github') ||
      lowerTech.includes('git')
    ) {
      groups['DevOps & Tools'].push(tech);
    } else {
      groups['Other'].push(tech);
    }
  });

  // Filter out empty groups
  return Object.entries(groups).filter(([_, techs]) => techs.length > 0);
};

// Mock data - same as in the main project page
const projectsData = {
  'ecommerce-platform': {
    title: 'E-commerce Platform',
    summary:
      'A comprehensive e-commerce solution built for a mid-size retail company, handling 10,000+ daily transactions with real-time inventory management and advanced analytics.',
    links: {
      live: 'https://shop.example.com',
      github: 'https://github.com/alexchen/ecommerce-platform',
      demo: 'https://demo.shop.example.com',
    },
    image: '/placeholder.svg?height=400&width=800',
    techSkillsUsed: [
      'Next.js 14',
      'TypeScript',
      'Tailwind CSS',
      'Stripe API',
      'PostgreSQL',
      'Redis',
    ],
    techSkillsExposed: ['Docker', 'Jenkins', 'AWS S3', 'Elasticsearch'],
    detailedExplanation: `This project was a complete rebuild of an existing e-commerce platform for a growing retail company. The previous system was built on WordPress and couldn't handle the increasing traffic and complex business requirements.

My primary contribution was architecting and implementing the entire frontend application using Next.js 14 with the new App Router. I worked closely with the backend team to design efficient API endpoints and implemented a robust state management system using Zustand for cart functionality and React Query for server state.

Key challenges included optimizing performance for large product catalogs (50,000+ products), implementing complex filtering and search functionality, and ensuring the checkout process was both secure and user-friendly.`,
    features: [
      {
        name: 'Product Catalog & Search',
        description:
          'Advanced filtering, sorting, and search with Elasticsearch integration',
        myContribution: true,
      },
      {
        name: 'Shopping Cart & Checkout',
        description:
          'Multi-step checkout process with guest and registered user support',
        myContribution: true,
      },
      {
        name: 'Payment Processing',
        description:
          'Stripe integration with support for multiple payment methods',
        myContribution: true,
      },
      {
        name: 'Admin Dashboard',
        description:
          'Comprehensive admin interface for product and order management',
        myContribution: true,
      },
      {
        name: 'Inventory Management',
        description: 'Real-time inventory tracking and low-stock alerts',
        myContribution: false,
      },
    ],
    troubleshoots: [
      {
        title: 'Performance Issues with Large Product Lists',
        problem:
          'The application slowed down significantly when rendering product lists with 50,000+ items, leading to poor user experience and high bounce rates.',
        solution:
          'Implemented virtual scrolling and pagination, optimized database queries, and added Redis caching for frequently accessed data. Reduced initial page load time from 3.2s to 0.8s.',
      },
      {
        title: 'Complex State Management for Cart',
        problem:
          'Managing the shopping cart state with useState became unmanageable as the application grew, leading to bugs and inconsistent behavior.',
        solution:
          'Migrated from useState to Zustand for better state management. Implemented optimistic updates and proper error handling for cart operations.',
      },
    ],
    period: 'March 2023 - November 2023 (8 months)',
    teamSize: '6 developers',
    role: 'Senior Frontend Developer',
  },
  'task-management-app': {
    title: 'Task Management Application',
    summary:
      'A collaborative project management tool designed for remote teams, featuring real-time collaboration, advanced project tracking, and team productivity analytics.',
    links: {
      live: 'https://taskflow.example.com',
      github: 'https://github.com/alexchen/taskflow',
      demo: 'https://demo.taskflow.example.com',
    },
    image: '/placeholder.svg?height=400&width=800',
    techSkillsUsed: [
      'React 18',
      'TypeScript',
      'Socket.io',
      'React Query',
      'Framer Motion',
      'Styled Components',
    ],
    techSkillsExposed: ['Node.js', 'MongoDB', 'JWT', 'GitHub Actions'],
    detailedExplanation: `This project was developed for a startup that needed a comprehensive project management solution for their distributed team of 50+ members. The existing tools weren't meeting their specific workflow requirements, particularly around real-time collaboration and custom project templates.

I led the frontend development and was responsible for the entire user interface, real-time features implementation, and performance optimization. The most challenging aspect was implementing smooth real-time collaboration where multiple users could edit tasks simultaneously without conflicts.`,
    features: [
      {
        name: 'Kanban Board Interface',
        description:
          'Drag-and-drop task management with customizable columns and swimlanes',
        myContribution: true,
      },
      {
        name: 'Real-time Collaboration',
        description:
          'Live updates, user presence indicators, and conflict resolution',
        myContribution: true,
      },
      {
        name: 'Multiple Project Views',
        description:
          'Kanban, List, Calendar, and Gantt chart views for different workflows',
        myContribution: true,
      },
    ],
    troubleshoots: [
      {
        title: 'Real-time Sync Conflicts',
        problem:
          'When multiple users edited tasks simultaneously, conflicts arose due to concurrent updates, leading to data loss and inconsistent states.',
        solution:
          'Implemented operational transformation for conflict resolution and optimistic updates with rollback capability. Added visual indicators for conflicting changes.',
      },
    ],
    period: 'June 2022 - December 2022 (6 months)',
    teamSize: '8 developers',
    role: 'Frontend Architect',
  },
  'analytics-dashboard': {
    title: 'Analytics Dashboard',
    summary:
      'A comprehensive analytics platform for tracking user behavior, conversion rates, and business metrics with real-time data visualization and custom reporting capabilities.',
    links: {
      live: 'https://analytics.example.com',
      github: 'https://github.com/alexchen/analytics-dashboard',
      demo: 'https://demo.analytics.example.com',
    },
    image: '/placeholder.svg?height=400&width=800',
    techSkillsUsed: [
      'React',
      'D3.js',
      'TypeScript',
      'React Query',
      'Recharts',
      'Date-fns',
    ],
    techSkillsExposed: ['Python', 'Redis', 'WebSocket', 'Apache Kafka'],
    detailedExplanation: `This analytics dashboard was built for a SaaS company that needed comprehensive insights into user behavior, product performance, and business metrics. The previous solution was a collection of static reports that didn't provide real-time insights or interactive exploration capabilities.

My role was to design and implement the entire frontend application, focusing on creating an intuitive interface for complex data visualization.`,
    features: [
      {
        name: 'Interactive Data Visualizations',
        description:
          'Custom charts, graphs, and heatmaps with drill-down capabilities',
        myContribution: true,
      },
      {
        name: 'Real-time Data Updates',
        description:
          'Live data streaming with WebSocket integration and automatic refresh',
        myContribution: true,
      },
    ],
    troubleshoots: [
      {
        title: 'Performance with Large Datasets',
        problem:
          'The dashboard struggled to render and process large datasets, leading to slow loading times and a poor user experience.',
        solution:
          'Implemented data virtualization for large tables, server-side pagination, and intelligent caching. Used Web Workers for heavy data processing.',
      },
    ],
    period: 'January 2023 - July 2023 (7 months)',
    teamSize: '4 developers',
    role: 'Lead Frontend Developer',
  },
  'mobile-banking-app': {
    title: 'Mobile Banking Interface',
    summary:
      'A secure, responsive web interface for a mobile banking application serving 100,000+ users with advanced security features, biometric authentication, and intuitive financial management tools.',
    links: {
      live: 'https://mobile.bankexample.com',
      github: 'Private Repository',
      demo: 'https://demo.bankexample.com',
    },
    image: '/placeholder.svg?height=400&width=800',
    techSkillsUsed: [
      'React Native Web',
      'TypeScript',
      'React Hook Form',
      'React Navigation',
      'Styled Components',
      'React Query',
    ],
    techSkillsExposed: [
      'OAuth 2.0',
      'Biometric APIs',
      'Push Notifications',
      'SSL/TLS',
    ],
    detailedExplanation: `This project involved developing the web interface for a mobile banking application for a regional bank with over 100,000 active users. The application needed to meet strict security requirements while providing an intuitive user experience for complex financial operations.

My primary responsibility was implementing the frontend application using React Native Web to ensure consistency between web and mobile platforms.`,
    features: [
      {
        name: 'Account Dashboard',
        description:
          'Comprehensive overview of accounts, balances, and recent transactions',
        myContribution: true,
      },
      {
        name: 'Secure Authentication',
        description:
          'Multi-factor authentication with biometric support and OAuth integration',
        myContribution: true,
      },
    ],
    troubleshoots: [
      {
        title: 'Biometric Authentication on Web',
        problem:
          'Implementing biometric authentication on web browsers proved challenging due to limited API support and security concerns.',
        solution:
          'Implemented WebAuthn API for supported browsers with graceful fallback to traditional 2FA. Added proper error handling and user education.',
      },
    ],
    period: 'August 2022 - February 2023 (6 months)',
    teamSize: '5 developers',
    role: 'Senior Frontend Engineer',
  },
};

export function ProjectModal() {
  const { openedProject: project, closeProjectModal } = useProjectModal();
  if (!project) return null;

  const primaryTechGroups = groupTechnologies(
    project.techSkillsUsed.map(tech => tech.name),
  );
  const exposedTechGroups = groupTechnologies(
    project.techSkillsExposed.map(tech => tech.name),
  );

  return (
    <Dialog open onOpenChange={closeProjectModal}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="sticky top-0 z-10 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
                <Code2 className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h2>
            </div>
            <div className="flex items-center gap-1">
              <Link href={`/projects/${project.id}`}>
                <button className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                  <Maximize2 className="h-5 w-5" />
                </button>
              </Link>
              <button
                onClick={closeProjectModal}
                className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="px-6 py-6 space-y-6">
          {/* Project Summary */}
          <div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.summary}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.links.live && (
                <Button
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                  asChild>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer">
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Live Site
                  </a>
                </Button>
              )}
              {project.links.github &&
                project.links.github !== 'Private Repository' && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer bg-transparent"
                    asChild>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-2" />
                      GitHub
                    </a>
                  </Button>
                )}
            </div>
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              width={600}
              height={300}
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Technologies Used</h3>

            <div className="mb-6">
              <h4 className="text-sm font-medium mb-3 flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                Primary Technologies
              </h4>
              <div className="space-y-3">
                {primaryTechGroups.map(([groupName, techs]) => (
                  <div key={groupName}>
                    <h5 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {groupName}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {techs.map(tech => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="px-2 py-1 text-xs">
                          {techIcons[tech as keyof typeof techIcons] && (
                            <span className="mr-1">
                              {techIcons[tech as keyof typeof techIcons]}
                            </span>
                          )}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-3 flex items-center">
                <Users className="h-4 w-4 text-blue-600 mr-2" />
                Technologies Worked With
              </h4>
              <div className="space-y-3">
                {exposedTechGroups.map(([groupName, techs]) => (
                  <div key={groupName}>
                    <h5 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {groupName}
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {techs.map(tech => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="px-2 py-1 text-xs">
                          {techIcons[tech as keyof typeof techIcons] && (
                            <span className="mr-1">
                              {techIcons[tech as keyof typeof techIcons]}
                            </span>
                          )}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
            <Card className="border-0 shadow-sm bg-gray-50/50 dark:bg-gray-800/50">
              <CardContent className="pt-4">
                <div className="prose max-w-none">
                  {project.detailedExplanation
                    .split('\n\n')
                    .map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Key Features */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <div className="grid gap-3">
              {project.features.slice(0, 4).map((feature, index) => (
                <Card
                  key={index}
                  className={`${feature.myContribution ? 'border-blue-200 bg-blue-50/50' : ''} border shadow-sm`}>
                  <CardContent className="pt-3 pb-3">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-sm font-medium">{feature.name}</h4>
                      {feature.myContribution && (
                        <Badge className="bg-blue-500 text-white text-xs">
                          My Contribution
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Challenge */}
          {project.troubleshoots.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-3">Key Challenge</h3>
              <Card className="border-0 shadow-sm bg-yellow-50/50 dark:bg-yellow-900/10">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center">
                    <Lightbulb className="h-4 w-4 text-yellow-500 mr-2" />
                    {project.troubleshoots[0].title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">
                      Challenge:
                    </h4>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      {project.troubleshoots[0].problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-gray-900 dark:text-white mb-1">
                      Solution:
                    </h4>
                    <p className="text-xs text-gray-700 dark:text-gray-300">
                      {project.troubleshoots[0].solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
