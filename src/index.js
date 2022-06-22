import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WebContent, { RedirectPage } from './app';
import './style.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<WebContent />} />
            <Route path=":route" element={<RedirectPage />} />
        </Routes>
    </BrowserRouter>);