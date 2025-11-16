// Interface for thought item
export interface Thought {
  title: string;
  date: string;
  slug: string;
  content: string | string[];
  excerpt: string;
  tags: string[];
}
