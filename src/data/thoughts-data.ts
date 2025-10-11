// src/data/thoughts-data.ts
import type { Thought } from '../types/blog';

export const thoughts: Thought[] = [
  {
    title: 'What is React?',
    date: '2025-05-19',
    slug: 'what-is-react',
    content: 'React is a JavaScript library for building user interfaces, created by Facebook (now Meta) in 2013. It revolutionized web development by introducing a component-based architecture and the concept of the Virtual DOM.',
    excerpt: 'Learn about React, the JavaScript library that revolutionized web development with component-based architecture and Virtual DOM.',
    tags: ['React', 'JavaScript', 'Frontend']
  },
  {
    title: 'What is React Router v7?',
    date: '2025-06-21',
    slug: 'what-is-router',
    content: 'React Router is a multi-strategy router for React bridging the gap from React 18 to React 19. You can use it maximally as a React framework or as minimally as you want. There are three primary modes for using it in your app: Declarative, Data, and Framework.',
    excerpt: 'Understand React Router, a routing library that enables dynamic navigation and declarative routing in React applications.',
    tags: ['React Router', 'Data Fetching', 'State Management', 'Routing', 'Framework']
  },
  {
    title: 'What is Remix 3?',
    date: '2025-07-24',
    slug: 'what-is-remix',
    content: 'Remix 3 is a reimagining of what a web framework can be; a fresh foundation shaped by decades of experience building for the web. Our focus is on simplicity, clarity, and performance, without giving up the power developers need. Its a modular toolkit that works well together but can also stand on its own, from first-class database drivers to a built-in component library.',
    excerpt: 'Discover Remix 3, a fresh foundation shaped by decades of experience building for the web. Our focus is on simplicity, clarity, and performance, without giving up the power developers need.',
    tags: ['Remix run', 'Remix', 'Routing', 'State Management', 'Data Fetching', 'Framework']
  },
  {
    title: 'What is TanStack Query?',
    date: '2025-08-17',
    slug: 'what-is-query',
    content: 'TanStack Query (formerly React Query) is a powerful data-fetching library that simplifies server state management in React applications. It acts like a smart assistant, handling the complexity of fetching, caching, and synchronizing data from your backend.',
    excerpt: 'Master TanStack Query, the data-fetching library that simplifies server state management with intelligent caching and synchronization.',
    tags: ['TanStack Query', 'Data Fetching', 'State Management']
  },
  {
    title: 'What is Tailwind CSS?',
    date: '2025-09-20',
    slug: 'what-is-tailwindcss',
    content: 'Tailwind CSS is a utility-first CSS framework that lets you build custom designs directly in your HTML without writing custom CSS. Instead of pre-designed components, Tailwind provides low-level utility classes that you can combine to create any design.',
    excerpt: 'Explore Tailwind CSS, the utility-first framework that lets you build custom designs directly in your HTML without writing custom CSS.',
    tags: ['Tailwind CSS', 'CSS', 'Framework']
  },
];
