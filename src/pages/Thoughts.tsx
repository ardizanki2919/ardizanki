import { Link } from 'react-router-dom';
import { thoughts } from '../data/thoughts-data';

// Interface for thought item
interface Thought {
  slug: string;
  title: string;
  date: string;
}

// Utility function for date formatting
const formatDate = (dateString: string): string => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return dateString; // Fallback to original if parsing fails
  }
};

// Extract thought item rendering logic for better maintainability
const renderThoughtItem = (thought: Thought) => (
  <Link
    key={thought.slug}
    to={`/thoughts/${thought.slug}`}
    className="flex justify-between items-center py-1 group hover:text-slate-800 transition-colors duration-200 rounded-md hover:bg-slate-50 px-2 -mx-2"
    aria-label={`Read thought: ${thought.title}, published on ${formatDate(thought.date)}`}
  >
    <span className="group-hover:text-slate-800 font-medium flex-1 pr-4">
      {thought.title}
    </span>
    <time 
      dateTime={thought.date}
      className="text-sm text-slate-400 group-hover:text-slate-600 flex-shrink-0"
      title={`Published on ${formatDate(thought.date)}`}
    >
      {formatDate(thought.date)}
    </time>
  </Link>
);

function Thoughts() {
  // Handle empty thoughts array
  if (!thoughts || thoughts.length === 0) {
    return (
      <div className="max-w-2xl">
        <h1 className="text-2xl font-bold mb-8 text-slate-800">
          Thoughts
        </h1>
        <div className="text-base text-slate-600 leading-relaxed">
          <p>No thoughts published yet. Check back soon for updates!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-8 text-slate-800">
        Thoughts
      </h1>
      
      <div className="space-y-1 text-base text-slate-600 leading-relaxed">
        {thoughts.map(renderThoughtItem)}
      </div>

      {/* Stats and pagination section */}
      {thoughts.length > 10 && (
        <div className="mt-8 pt-6 border-t border-slate-200">
          <p className="text-sm text-slate-500 text-center">
            Showing {thoughts.length} {thoughts.length === 1 ? 'thought' : 'thoughts'}
          </p>
        </div>
      )}
    </div>
  );
}

export default Thoughts;
