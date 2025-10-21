import React from 'react';
import { Link } from 'react-router-dom';
export default function Header({ dark, toggleDark }) {
  return (
    <header className="w-full border-b border-gray-800 bg-gradient-to-b from-gray-900/40 to-transparent px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/src/assets/logo.svg" alt="Finanzas Claras" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-semibold">Finanzas Claras</h1>
            <p className="text-sm text-gray-400">Decide. Ahorra. Crece.</p>
          </div>
        </Link>
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm hover:underline">Inicio</Link>
          <Link to="/blog" className="text-sm hover:underline">Blog</Link>
          <Link to="/herramientas" className="text-sm hover:underline">Herramientas</Link>
          <Link to="/sobre" className="text-sm hover:underline">Sobre</Link>
          <button onClick={toggleDark} className="ml-2 px-3 py-1 rounded-md border border-gray-700 text-sm">
            {dark ? 'Modo claro' : 'Modo oscuro'}
          </button>
        </nav>
      </div>
    </header>
  );
}
