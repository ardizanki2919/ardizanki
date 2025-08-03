import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { thoughts } from '../data/thoughts-data';

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
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
};

function ThoughtDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = thoughts.find((t) => t.slug === slug);

  // Update document title for SEO
  useEffect(() => {
    if (post) {
      document.title = `${post.title} | Ardi Zanki`;
    } else {
      document.title = 'Post Not Found | Ardi Zanki';
    }

    // Cleanup: reset title when component unmounts
    return () => {
      document.title = 'Ardi Zanki';
    };
  }, [post]);

  if (!post) {
    return (
      <div className="max-w-2xl">
        <div className="text-center py-12 text-base text-slate-600 leading-relaxed">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Post Not Found</h1>
          <p className="text-slate-600">
            Sorry, the post you're looking for doesn't exist or has been moved.
          </p>
        </div>
      </div>
    );
  }

  const readingTime = estimateReadingTime(post.content);

  return (
    <div className="max-w-2xl">
      <article className="space-y-6">
        {/* Article header */}
        <header className="space-y-4">
          <h1 className="text-3xl font-bold text-slate-800 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-4 text-sm text-slate-500 border-b border-slate-200 pb-4">
            <time dateTime={post.date} className="flex items-center">
              <span className="mr-1">📅</span>
              {formatDate(post.date)}
            </time>
            <span className="flex items-center">
              <span className="mr-1">📖</span>
              {readingTime} min read
            </span>
          </div>
        </header>

        {/* Article content */}
        <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed">
          {/* Handle content rendering - could be markdown or plain text */}
          {typeof post.content === 'string' ? (
            <div className="whitespace-pre-wrap">{post.content}</div>
          ) : (
            post.content
          )}
        </div>
      </article>
    </div>
  );
}

export default ThoughtDetail;
