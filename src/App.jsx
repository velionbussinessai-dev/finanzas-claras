import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import ArticlePage from './pages/ArticlePage';
import Tools from './pages/Tools';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';

export default function App() {
  const [dark, setDark] = useState(true);
  useEffect(() => { document.documentElement.classList.toggle('dark', dark); }, [dark]);

  useEffect(() => {
    if (!document.getElementById('adsense-script')) {
      const s = document.createElement('script');
      s.id = 'adsense-script';
      s.async = true;
      s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      s.setAttribute('data-ad-client', 'ca-pub-XXXXXXXXXXXXXXXX');
      document.head.appendChild(s);
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Header dark={dark} toggleDark={() => setDark(d => !d)} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<ArticlePage />} />
          <Route path="/herramientas" element={<Tools />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/politica" element={<Privacy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
