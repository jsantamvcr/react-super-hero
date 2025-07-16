import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { HeroApp } from './HeroApp.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <HeroApp/>
        </BrowserRouter>
    </StrictMode>
)
