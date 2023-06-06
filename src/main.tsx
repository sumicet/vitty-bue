import { createRoot } from 'react-dom/client';
import './index.css';
import { Routes } from '@/components';
import { StrictMode } from 'react';

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <Routes />
    </StrictMode>
);
