// Interface for thought item
export interface Thought {
  title: string;
  date: string;
  content: string;
  slug: string;
  excerpt?: string;
  tags?: string[];
}
