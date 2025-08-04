import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from 'react-router-dom';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import About from './pages/About';
import Thoughts from './pages/Thoughts';
import ThoughtDetail from './pages/ThoughtDetail';
import Projects from './pages/Projects';

const socialLinks = [
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

const internalNavItems = [
  { to: '/about', label: 'about' },
  { to: '/thoughts', label: 'thoughts' },
  { to: '/projects', label: 'projects' },
];

const externalNavItems = [
  { 
    href: 'https://ardizanki.com/', 
    label: 'new site',
    icon: ExternalLink 
  },
];

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
      <h1 className="text-4xl font-bold text-slate-800 mb-4">404</h1>
      <p className="text-slate-600 mb-6">Sorry, the page you're looking for doesn't exist.</p>
      <NavLink 
        to="/about" 
        className="text-slate-800 hover:text-slate-600 underline transition-colors duration-200"
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
        {/* Sidebar */}
        <nav className="w-full md:w-48 md:min-h-screen p-4 md:p-8 bg-white md:bg-transparent md:border-b-0" role="navigation">
          <div className="md:sticky md:top-8">
            {/* Brand/Title - Optional */}
            <div className="hidden md:block mb-8">
              {/* <h1 className="text-xl font-bold text-slate-800">Ardizanki</h1> */}
            </div>

            {/* Internal Navigation Links */}
            <div className="flex md:flex-col space-x-4 md:space-x-0 md:space-y-2 mb-4 md:mb-6">
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

            {/* External Navigation Links */}
            <div className="hidden md:flex md:flex-col md:space-y-2 mb-6">
              {externalNavItems.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 transition-colors duration-200 flex items-center gap-2"
                >
                  {label}
                  <Icon size={14} />
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex md:justify-start space-x-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-slate-600 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-16 pb-24 md:pb-16" role="main">
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
