import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import { Github, Linkedin, Twitter } from 'lucide-react';
import About from './pages/About';
import Thoughts from './pages/Thoughts';
import ThoughtDetail from './pages/ThoughtDetail';
import Projects from './pages/Projects';

// Types for better type safety
interface SocialLink {
  href: string;
  icon: React.ComponentType<{ size?: number }>;
  label: string;
}

interface InternalNavItem {
  to: string;
  label: string;
}

// interface ExternalNavItem {
//   href: string;
//   label: string;
//   icon: React.ComponentType<{ size?: number }>;
// }

const socialLinks: SocialLink[] = [
  {
    href: 'https://x.com/ardizanki7',
    icon: Twitter,
    label: 'Twitter',
  },
  {
    href: 'https://www.linkedin.com/in/ardizanki/',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://github.com/ardizanki2919',
    icon: Github,
    label: 'GitHub',
  },
];

const internalNavItems: InternalNavItem[] = [
  { to: '/about', label: 'about' },
  { to: '/thoughts', label: 'thoughts' },
  { to: '/projects', label: 'projects' },
];

// const externalNavItems: ExternalNavItem[] = [
//   { 
//     href: 'https://ardizanki.com/', 
//     label: 'new site',
//     icon: ExternalLink 
//   },
// ];

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">404</h1>
      <p className="text-slate-600 mb-6">Sorry, the page you're looking for doesn't exist.</p>
      <NavLink 
        to="/about" 
        className="text-slate-800 hover:text-slate-600 underline transition-colors duration-200"
        aria-label="Go back to about page"
      >
        Go back home
      </NavLink>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col md:flex-row">
        {/* Sidebar Navigation */}
        <nav 
          className="w-full md:w-48 md:min-h-screen p-4 md:p-8 bg-white md:bg-transparent md:border-b-0" 
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="md:sticky md:top-8">
            {/* Brand/Title - Optional */}
            <div className="hidden md:block mb-8">
              {/* <h1 className="text-xl font-bold text-slate-800">Ardizanki</h1> */}
            </div>

            {/* Internal Navigation Links */}
            <div 
              className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-2 mb-4 md:mb-6"
              role="list"
            >
              {internalNavItems.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive 
                        ? 'bg-slate-100 text-slate-900' 
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                    }`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* External Navigation Links
            <div className="hidden md:flex md:flex-col md:space-y-2 mb-6">
              {externalNavItems.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-200 flex items-center gap-2"
                  aria-label={`Visit ${label} (opens in new tab)`}
                >
                  {label}
                  <Icon size={14} aria-hidden="true" />
                </a>
              ))}
            </div> */}

            {/* Social Links */}
            <div className="hidden md:flex md:justify-start space-x-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-600 transition-colors duration-200"
                  aria-label={`Visit my ${label} profile (opens in new tab)`}
                >
                  <Icon size={20} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main 
          className="flex-1 p-6 md:p-16 pb-24 md:pb-16" 
          role="main"
          id="main-content"
        >
          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/thoughts/:slug" element={<ThoughtDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
