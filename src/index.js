import { createRoot } from 'react-dom/client';
import WebContent from './app';
import './style.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<WebContent />);