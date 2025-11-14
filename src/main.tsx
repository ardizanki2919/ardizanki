import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/globals.css';

// Grab root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error(
    '[main.tsx] Root element #root not found. Check your index.html.'
  );
}

// Only enable StrictMode in development to avoid double-render dev behavior
const enableStrictMode = import.meta.env.DEV;

const app = <App />;

createRoot(rootElement).render(
  enableStrictMode ? <StrictMode>{app}</StrictMode> : app
);
