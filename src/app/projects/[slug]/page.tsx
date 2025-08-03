import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ArrowLeft,
  ExternalLink,
  CheckCircle,
  Lightbulb,
  Code2,
  Users,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';

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

// Technology grouping function
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

// Mock data - in a real app, this would come from a CMS or database
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

Key challenges included optimizing performance for large product catalogs (50,000+ products), implementing complex filtering and search functionality, and ensuring the checkout process was both secure and user-friendly. I also led the implementation of the admin dashboard, which required building a comprehensive data visualization system.

The project took 8 months to complete with a team of 6 developers. I was responsible for the entire frontend architecture, component library design, and performance optimization strategies.`,
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
        name: 'User Account Management',
        description:
          'Registration, login, profile management, and order history',
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
      {
        name: 'Analytics & Reporting',
        description:
          'Sales analytics, user behavior tracking, and custom reports',
        myContribution: false,
      },
      {
        name: 'Email Notifications',
        description: 'Automated emails for orders, shipping, and marketing',
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
          'Migrated from useState to Zustand for better state management. Implemented optimistic updates and proper error handling for cart operations. Added persistence to localStorage with proper hydration.',
      },
      {
        title: 'Mobile Checkout Conversion Issues',
        problem:
          'The mobile checkout flow had a low conversion rate due to friction points and usability issues, resulting in lost sales.',
        solution:
          'Conducted user testing and identified friction points in the mobile checkout flow. Redesigned the checkout process with larger touch targets, simplified forms, and better error messaging. Improved mobile conversion rate by 23%.',
      },
      {
        title: 'SEO and Core Web Vitals',
        problem:
          'The website had poor SEO performance and low Core Web Vitals scores, resulting in low search engine rankings and reduced organic traffic.',
        solution:
          'Implemented proper meta tags, structured data, and optimized images. Used Next.js Image component and implemented lazy loading. Achieved 95+ Lighthouse scores across all metrics.',
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

I led the frontend development and was responsible for the entire user interface, real-time features implementation, and performance optimization. The most challenging aspect was implementing smooth real-time collaboration where multiple users could edit tasks simultaneously without conflicts.

My key contributions included designing and implementing the drag-and-drop Kanban interface, building the real-time notification system, and creating a flexible component architecture that could accommodate different project views (Kanban, List, Calendar, Gantt).

I also implemented advanced features like bulk operations, keyboard shortcuts, and offline support with conflict resolution. The application needed to work seamlessly across different devices and screen sizes, which required careful consideration of responsive design patterns.`,
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
      {
        name: 'Advanced Filtering & Search',
        description:
          'Complex filtering options with saved filters and search across all content',
        myContribution: true,
      },
      {
        name: 'Team Collaboration Tools',
        description: 'Comments, mentions, file attachments, and activity feeds',
        myContribution: true,
      },
      {
        name: 'Project Templates',
        description:
          'Customizable project templates for different team workflows',
        myContribution: false,
      },
      {
        name: 'Time Tracking',
        description: 'Built-in time tracking with reporting and analytics',
        myContribution: false,
      },
      {
        name: 'API Integration',
        description:
          'Integrations with Slack, GitHub, and other development tools',
        myContribution: false,
      },
    ],
    troubleshoots: [
      {
        title: 'Real-time Sync Conflicts',
        problem:
          'When multiple users edited tasks simultaneously, conflicts arose due to concurrent updates, leading to data loss and inconsistent states.',
        solution:
          'Implemented operational transformation for conflict resolution and optimistic updates with rollback capability. Added visual indicators for conflicting changes and user-friendly merge interfaces.',
      },
      {
        title: 'Performance with Large Datasets',
        problem:
          'The application became slow and unresponsive when dealing with large task lists and complex project structures, impacting user experience.',
        solution:
          'Implemented virtual scrolling for large task lists, pagination for API calls, and intelligent caching strategies. Used React.memo and useMemo extensively to prevent unnecessary re-renders.',
      },
      {
        title: 'Complex Drag-and-Drop Interactions',
        problem:
          'Implementing a smooth and intuitive drag-and-drop interface for the Kanban board proved challenging due to complex collision detection and performance requirements.',
        solution:
          'Built custom drag-and-drop system using react-beautiful-dnd with custom collision detection. Added keyboard accessibility and touch support for mobile devices.',
      },
      {
        title: 'Offline Support and Sync',
        problem:
          'Providing offline support and seamless synchronization of changes when users came back online was difficult due to the complexity of conflict resolution and data consistency.',
        solution:
          'Implemented service worker for offline functionality and built a queue system for pending operations. Added conflict resolution UI for when users come back online with conflicting changes.',
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

My role was to design and implement the entire frontend application, focusing on creating an intuitive interface for complex data visualization. The biggest challenge was making large datasets accessible and meaningful to non-technical stakeholders while providing the depth that data analysts needed.

I implemented a flexible dashboard system where users could create custom views, save filters, and share insights with their teams. The application needed to handle real-time data updates without impacting performance, which required careful optimization of rendering and data management strategies.

Key technical achievements included building a custom chart library on top of D3.js for specific business requirements, implementing efficient data aggregation on the frontend, and creating a responsive design that worked well on both desktop and tablet devices.`,
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
      {
        name: 'Custom Dashboard Builder',
        description:
          'Drag-and-drop interface for creating personalized dashboard layouts',
        myContribution: true,
      },
      {
        name: 'Advanced Filtering System',
        description:
          'Complex multi-dimensional filtering with date ranges and custom segments',
        myContribution: true,
      },
      {
        name: 'Export and Sharing',
        description:
          'PDF/CSV export functionality and shareable dashboard links',
        myContribution: true,
      },
      {
        name: 'Data Processing Pipeline',
        description: 'ETL processes for data aggregation and transformation',
        myContribution: false,
      },
      {
        name: 'User Behavior Tracking',
        description: 'Event tracking and user journey analysis',
        myContribution: false,
      },
      {
        name: 'Automated Reporting',
        description: 'Scheduled reports and alert system for key metrics',
        myContribution: false,
      },
    ],
    troubleshoots: [
      {
        title: 'Performance with Large Datasets',
        problem:
          'The dashboard struggled to render and process large datasets, leading to slow loading times and a poor user experience.',
        solution:
          'Implemented data virtualization for large tables, server-side pagination, and intelligent caching. Used Web Workers for heavy data processing to keep the UI responsive.',
      },
      {
        title: 'Complex Chart Interactions',
        problem:
          'Implementing complex chart interactions like zoom, pan, and brush while maintaining performance with large datasets proved challenging.',
        solution:
          'Built custom D3.js components with proper event handling and accessibility support. Implemented zoom, pan, and brush interactions while maintaining performance with large datasets.',
      },
      {
        title: 'Real-time Data Synchronization',
        problem:
          'Ensuring real-time data synchronization across multiple users without impacting performance was a significant challenge.',
        solution:
          'Implemented efficient WebSocket connection management with reconnection logic. Used differential updates to minimize data transfer and prevent unnecessary re-renders.',
      },
      {
        title: 'Cross-browser Compatibility',
        problem:
          'Ensuring the dashboard worked consistently across different browsers and devices was difficult due to varying levels of support for advanced features.',
        solution:
          'Extensive testing across different browsers and devices. Implemented polyfills for older browsers and fallback solutions for unsupported features. Used progressive enhancement for advanced visualizations.',
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

My primary responsibility was implementing the frontend application using React Native Web to ensure consistency between web and mobile platforms. I worked closely with the security team to implement proper authentication flows, data encryption, and secure session management.

The most challenging aspects were implementing biometric authentication for web browsers, ensuring accessibility compliance for financial services, and optimizing performance for users on slower network connections. I also had to design interfaces that could handle complex financial data while remaining simple enough for users of all technical skill levels.

Key contributions included building a comprehensive component library that met banking design standards, implementing advanced form validation for financial transactions, and creating a responsive design system that worked seamlessly across all device sizes.`,
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
      {
        name: 'Transaction Management',
        description: 'Transfer funds, pay bills, and manage recurring payments',
        myContribution: true,
      },
      {
        name: 'Mobile Check Deposit',
        description: 'Camera integration for check capture and processing',
        myContribution: true,
      },
      {
        name: 'Financial Planning Tools',
        description:
          'Budget tracking, spending analysis, and savings goal management',
        myContribution: true,
      },
      {
        name: 'Fraud Detection System',
        description: 'Real-time transaction monitoring and alert system',
        myContribution: false,
      },
      {
        name: 'Customer Support Chat',
        description: 'Integrated chat system with secure document sharing',
        myContribution: false,
      },
      {
        name: 'Regulatory Compliance',
        description:
          'GDPR, PCI DSS, and banking regulation compliance features',
        myContribution: false,
      },
    ],
    troubleshoots: [
      {
        title: 'Biometric Authentication on Web',
        problem:
          'Implementing biometric authentication on web browsers proved challenging due to limited API support and security concerns.',
        solution:
          'Implemented WebAuthn API for supported browsers with graceful fallback to traditional 2FA. Added proper error handling and user education for unsupported devices.',
      },
      {
        title: 'Security and Performance Balance',
        problem:
          'Balancing security requirements with performance optimization was difficult due to the need for encryption and secure data handling.',
        solution:
          'Implemented efficient encryption/decryption on the client side without compromising security. Used service workers for secure caching and optimized bundle sizes for faster loading.',
      },
      {
        title: 'Accessibility for Financial Data',
        problem:
          'Ensuring accessibility for users with disabilities when dealing with complex financial data was a significant challenge.',
        solution:
          'Extensive testing with screen readers and keyboard navigation. Implemented proper ARIA labels for complex financial tables and charts. Added high contrast mode and font size controls.',
      },
      {
        title: 'Cross-platform Consistency',
        problem:
          'Maintaining a consistent user experience across web and mobile platforms was difficult due to platform-specific differences and limitations.',
        solution:
          'Created a comprehensive design system with React Native Web to ensure identical user experience across platforms. Implemented platform-specific optimizations while maintaining feature parity.',
      },
    ],
    period: 'August 2022 - February 2023 (6 months)',
    teamSize: '5 developers',
    role: 'Senior Frontend Engineer',
  },
};

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetail({ params }: PageProps) {
  const project = projectsData[params.slug as keyof typeof projectsData];

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
      {/* Header */}
      <Header />

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Project Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
              <Code2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            {project.links.live && (
              <Button
                className="bg-blue-600 hover:bg-blue-700 cursor-pointer"
                asChild>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live Project
                </a>
              </Button>
            )}

            {project.links.github &&
              project.links.github === 'Private Repository' && (
                <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                  <span>Source code not available (Company project)</span>
                </div>
              )}
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.title}
              width={800}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Tech Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Technologies Used
          </h2>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              Primary Technologies
            </h3>
            <div className="space-y-4">
              {groupTechnologies(project.techSkillsUsed).map(
                ([groupName, techs]) => (
                  <div key={groupName}>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {groupName}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {techs.map(tech => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="px-3 py-1 text-sm">
                          {techIcons[tech as keyof typeof techIcons] && (
                            <span className="mr-2">
                              {techIcons[tech as keyof typeof techIcons]}
                            </span>
                          )}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="h-5 w-5 text-blue-600 mr-2" />
              Technologies Worked With
            </h3>
            <div className="space-y-4">
              {groupTechnologies(project.techSkillsExposed).map(
                ([groupName, techs]) => (
                  <div key={groupName}>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                      {groupName}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {techs.map(tech => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="px-3 py-1 text-sm">
                          {techIcons[tech as keyof typeof techIcons] && (
                            <span className="mr-2">
                              {techIcons[tech as keyof typeof techIcons]}
                            </span>
                          )}
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* Detailed Explanation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Project Overview & My Contributions
          </h2>
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="prose max-w-none">
                {project.detailedExplanation
                  .split('\n\n')
                  .map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Project Features
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <Card
                key={index}
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

        {/* Troubleshoots */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Challenges & Solutions
          </h2>
          <div className="space-y-8">
            {project.troubleshoots.map((item, index) => (
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

        {/* Navigation */}
        <div className="flex justify-center">
          <Link href="/" className="cursor-pointer">
            <Button size="lg">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
