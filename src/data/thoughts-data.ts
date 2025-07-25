export interface Post {
  title: string;
  date: string;
  content: string;
  slug: string;
}

export const thoughts: Post[] = [
  {
    title: 'What is React',
    date: '2025.04.15',
    slug: 'what-is-react',
    content: 'React is a JavaScript library for building user interfaces, created by Facebook (now Meta) in 2013. It revolutionized web development by introducing a component-based architecture and the concept of the Virtual DOM.'
  },
  {
    title: 'What is Next.js',
    date: '2025.05.17',
    slug: 'what-is-nextjs',
    content: 'Next.js is a React framework that provides everything you need to build production-ready web applications. While React is a library for building user interfaces, Next.js is a complete framework that handles routing, bundling, optimization, and deployment.'
  },
  {
    title: 'What is Tailwind CSS',
    date: '2025.06.21',
    slug: 'what-is-tailwindcss',
    content: 'Tailwind CSS is a utility-first CSS framework that lets you build custom designs directly in your HTML without writing custom CSS. Instead of pre-designed components, Tailwind provides low-level utility classes that you can combine to create any design.'
  },
  {
    title: 'What is TanStack Query',
    date: '2025.07.18',
    slug: 'what-is-query',
    content: 'TanStack Query (formerly React Query) is a powerful data-fetching library that simplifies server state management in React applications. Think of it as your smart assistant that handles all the complexity of fetching, caching, and synchronizing data from your backend.'
  },
];