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
    title: 'What is React Router?',
    date: '2025-06-21',
    slug: 'what-is-router',
    content: 'React Router is a multi-strategy router for React bridging the gap from React 18 to React 19. You can use it maximally as a React framework or as minimally as you want. There are three primary modes for using it in your app: Declarative, Data, and Framework.',
    excerpt: 'Understand React Router, a routing library that enables dynamic navigation and declarative routing in React applications.',
    tags: ['React Router', 'Data Fetching', 'State Management', 'Routing', 'Framework']
  },
  {
    title: 'What is Tailwind CSS?',
    date: '2025-07-24',
    slug: 'what-is-tailwindcss',
    content: 'Tailwind CSS is a utility-first CSS framework that lets you build custom designs directly in your HTML without writing custom CSS. Instead of pre-designed components, Tailwind provides low-level utility classes that you can combine to create any design.',
    excerpt: 'Explore Tailwind CSS, the utility-first framework that lets you build custom designs directly in your HTML without writing custom CSS.',
    tags: ['Tailwind CSS', 'CSS', 'Framework']
  },
];
