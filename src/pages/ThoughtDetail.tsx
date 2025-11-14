import { useParams } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { thoughts } from '../data/thoughts-data';
import type { Thought } from '../types/blog';

// Utility: safer date formatting
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Utility: estimate reading time
const estimateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

const renderPostMetadata = (post: Thought) => {
  const formattedDate = formatDate(post.date);
  const readingTime = estimateReadingTime(post.content);

  return (
    <div className="flex items-center space-x-4 text-sm text-slate-500 border-b border-slate-200 pb-4">
      <time
        dateTime={post.date}
        title={`Published on ${formattedDate}`}
        aria-label={`Published on ${formattedDate}`}
      >
        {formattedDate}
      </time>

      <span
        title={`Estimated reading time: ${readingTime} minutes`}
        aria-label={`Estimated reading time ${readingTime} minutes`}
      >
        {readingTime} min read
      </span>
    </div>
  );
};

const NotFoundState = () => (
  <div className="max-w-2xl">
    <div className="text-center py-12 text-base text-slate-600 leading-relaxed">
      <h1 className="text-2xl font-bold text-slate-800 mb-4">
        Post Not Found
      </h1>
      <p>
        Sorry, the post you're looking for doesn't exist or has been moved.
      </p>
    </div>
  </div>
);

function ThoughtDetail() {
  const { slug } = useParams<{ slug: string }>();

  const post = useMemo(
    () => thoughts.find((t: Thought) => t.slug === slug),
    [slug]
  );

  useEffect(() => {
    const defaultTitle = 'Ardi Zanki';
    const defaultDescription =
      'Software Engineer specializing in TypeScript and React';

    const metaDescription = document.querySelector('meta[name="description"]');

    if (post) {
      document.title = `${post.title} | Ardi Zanki`;

      if (metaDescription && post.excerpt) {
        metaDescription.setAttribute('content', post.excerpt);
      }
    } else {
      document.title = `Post Not Found | ${defaultTitle}`;
    }

    return () => {
      document.title = defaultTitle;

      if (metaDescription) {
        metaDescription.setAttribute('content', defaultDescription);
      }
    };
  }, [post]);

  if (!post) return <NotFoundState />;

  return (
    <div className="max-w-2xl">
      <article className="space-y-6">
        <header className="space-y-4">
          <h1
            className="text-2xl font-semibold text-slate-800 leading-tight"
            aria-label={`Post title: ${post.title}`}
          >
            {post.title}
          </h1>

          {renderPostMetadata(post)}
        </header>

        <div className="prose prose-slate prose-lg max-w-none">
          <div
            className="text-slate-600 leading-relaxed whitespace-pre-wrap"
            aria-label="Post content"
          >
            {post.content}
          </div>
        </div>
      </article>
    </div>
  );
}

export default ThoughtDetail;
