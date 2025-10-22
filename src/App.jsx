import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Article from './pages/Article.jsx';

export default function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article/:slug" element={<Article />} />
    </Routes>
  </BrowserRouter>);
}