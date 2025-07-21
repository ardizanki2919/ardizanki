import { useParams, Link } from 'react-router-dom';
import { thoughts } from './thoughts-data';

function ThoughtDetail() {
  const { slug } = useParams();
  const post = thoughts.find((t) => t.slug === slug);

  if (!post) {
    return (
      <div className="max-w-2xl space-y-4 text-base text-slate-600 leading-relaxed">
        <p>Post not found.</p>
        <Link
          to="/thoughts"
          className="text-slate-800 hover:text-slate-600 font-medium transition-colors"
        >
          ← Back to thoughts
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <article className="space-y-6 text-base text-slate-600 leading-relaxed">
        <h1 className="text-2xl font-bold mb-8 text-slate-800">{post.title}</h1>
        <div className="prose prose-slate max-w-none">{post.content}</div>
      </article>
    </div>
  );
}

export default ThoughtDetail;
