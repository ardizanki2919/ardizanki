import { Link } from 'react-router-dom';
import { thoughts } from '../data/thoughts-data';

function Thoughts() {
  return (
    <div className="max-w-2xl">
      <h1 className="text-2xl font-bold mb-8 text-slate-800">Thoughts</h1>
      <div className="space-y-4 text-base text-slate-600 leading-relaxed">
        {thoughts.map((thought) => (
          <Link
            key={thought.slug}
            to={`/thoughts/${thought.slug}`}
            className="flex justify-between items-center group hover:text-slate-800 transition-colors"
          >
            <span className="group-hover:text-slate-800 font-medium">
              {thought.title}
            </span>
            <span className="text-sm text-slate-400 group-hover:text-slate-600">
              {thought.date}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Thoughts;
