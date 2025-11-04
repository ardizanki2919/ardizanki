import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { thoughts } from '../data/thoughts-data';
import type { Thought } from '../types/blog';

// Utility function for date formatting (same as Thoughts.tsx)
const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
};

// Utility function to estimate reading time
const estimateReadingTime = (content: string): number => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).filter(word => word.length > 0).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
};

// Extract metadata rendering logic
const renderPostMetadata = (post: Thought) => {
  const readingTime = estimateReadingTime(post.content);
  return (
    <div className="flex items-center space-x-4 text-sm text-slate-500 border-b border-slate-200 pb-4">
      <time 
        dateTime={post.date}
        title={`Published on ${formatDate(post.date)}`}
        aria-label={`Published on ${formatDate(post.date)}`}
      >
        {formatDate(post.date)}
      </time>
      <span title={`Estimated reading time: ${readingTime} minutes`} aria-label={`Estimated reading time ${readingTime} minutes`}>
        {readingTime} min read
      </span>
    </div>
  );
};

// Extract not found component
const NotFoundState = () => (
  <div className="max-w-2xl">
    <div className="text-center py-12 text-base text-slate-600 leading-relaxed">
      <h1 className="text-2xl font-bold text-slate-800 mb-4">
        Post Not Found
      </h1>
      <p className="text-slate-600">
        Sorry, the post you're looking for doesn't exist or has been moved.
      </p>
    </div>
  </div>
);

function ThoughtDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post: Thought | undefined = thoughts.find((t: Thought) => t.slug === slug);

  // Update document title for SEO
  useEffect(() => {
    if (post) {
      document.title = `Ardi Zanki`;
      // Add meta description for SEO
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && post.excerpt) {
        metaDescription.setAttribute('content', post.excerpt);
      }
    } else {
      document.title = 'Post Not Found | Ardi Zanki';
    }

    // Cleanup: reset title when component unmounts
    return () => {
      document.title = 'Ardi Zanki';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Software Engineer specializing in Laravel, React, and Vue');
      }
    };
  }, [post]);

  if (!post) {
    return <NotFoundState />;
  }

  return (
    <div className="max-w-2xl">
      <article className="space-y-6">
        {/* Article header */}
        <header className="space-y-4">
          <h1 className="text-2xl font-semibold text-slate-800 leading-tight"
            aria-label={`Post title: ${post.title}`}
          >
            {post.title}
          </h1>
          
          {renderPostMetadata(post)}
        </header>

        {/* Article content */}
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
