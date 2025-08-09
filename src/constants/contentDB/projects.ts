import { Project } from "@/types/project";
import { TECH_SKILLS } from "./techSkills";

/**
 * @TODO fill with actual data
 */
export const PROJECTS_DB = [{
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    summary:
      'A comprehensive e-commerce solution built for a mid-size retail company, handling 10,000+ daily transactions with real-time inventory management and advanced analytics.',
    links: {
      live: 'https://shop.example.com',
      github: 'https://github.com/alexchen/ecommerce-platform',
      appStore: 'https://demo.shop.example.com',
      playStore: 'https://demo.shop.example.com',
    },
    iconUrl: 'https://yt3.googleusercontent.com/Wyb8NNdRNxSD9OgKgQpH7GbKeSf5S5cpAn_jF-dzkScJ0WE2IQ-3XbQt4png1HMuxKJK52Yf2w=s900-c-k-c0x00ffffff-no-rj',
    screenshots: {
      type: 'landscape',
      images: [
        {
          src: '/placeholder.svg?height=400&width=800',
          description: 'This is the main view of our e-commerce platform.',
        },
        {
          src: '/placeholder.svg?height=400&width=800&seed=2',
          description: 'Product detail page with advanced filtering options.',
        },
        {
          src: '/placeholder.svg?height=400&width=800&seed=3',
          description: 'A responsive checkout process for a seamless user experience.',
        },
      ],
    },
    tags: ['E-commerce', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL', 'Redis'],
    techSkillsUsed: [TECH_SKILLS.nextJS, TECH_SKILLS.typescript],
    techSkillsExposed: [TECH_SKILLS.docker, TECH_SKILLS.codeIgniter],
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
    period: {
      startDate: '2023-03',
    },
    teamSize: {
      min: 6,
      max: 10,
    },
  },
  {
    id: 'task-management-app',
    title: 'Task Management Application',
    summary:
      'A collaborative project management tool designed for remote teams, featuring real-time collaboration, advanced project tracking, and team productivity analytics.',
    iconUrl: 'https://images.seeklogo.com/logo-png/17/1/kfc-logo-png_seeklogo-176326.png',
    links: {
      live: 'https://taskflow.example.com',
      github: 'https://github.com/alexchen/taskflow',
    },
    screenshots: {
      type: 'landscape',
      images: [
        {
          src: '/placeholder.svg?height=400&width=800&seed=4',
          description: 'Kanban board interface for task management.',
        },
        {
          src: '/placeholder.svg?height=400&width=800&seed=5',
        },
        {
          src: '/placeholder.svg?height=400&width=800&seed=6',
          description: 'Gantt chart view for project timeline visualization.',
        },
      ],
    },
    tags: ['React', 'TypeScript', 'Styled Components', 'Socket.io', 'React Query', 'Framer Motion', 'SonarQube'],
    techSkillsUsed: [
      TECH_SKILLS.reactJS,
      TECH_SKILLS.styledComponents
    ],
    techSkillsExposed: [TECH_SKILLS.sonarqube],
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
    period: {
      startDate: '2022-06',
      endDate: '2022-12',
    },
    teamSize: 8,
    role: 'Frontend Architect',
  }]as const satisfies ReadonlyArray<Project>;
