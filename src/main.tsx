import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'prismjs/themes/prism-tomorrow.css';
import { initSpaceBackground } from './lib/background';

// Choisit un background spatial aléatoire + lance l'animation de pan
// avec un parcours unique à chaque visite (avant le premier render)
initSpaceBackground();
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './views/Home';
import Documentation from './views/DocView/Documentation';
import Exp from './views/Exp';
import Skills from './views/Skills';
import Hobbies from './views/Hobbies';
import Projects from './views/Projects';
import Contact from './views/Contact';

import i18n from './localizations/i18n';

i18n.changeLanguage(navigator.language);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="documentation" element={<Documentation />} />
        <Route path="exp" element={<Exp />} />
        <Route path="skills" element={<Skills />} />
        <Route path="hobbies" element={<Hobbies />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
