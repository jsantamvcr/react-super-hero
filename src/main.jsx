import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { HeroApp } from './HerosApp.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HeroApp/>
  </StrictMode>
)
