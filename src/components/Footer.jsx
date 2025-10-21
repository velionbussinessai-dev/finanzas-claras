import React from 'react';
import { Link } from 'react-router-dom';
export default function Footer(){
  return (
    <footer className="mt-12 border-t border-gray-800 text-sm text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h3 className="font-semibold">Finanzas Claras</h3>
          <p className="mt-2">Contenido educativo. No es asesoramiento financiero.</p>
        </div>
        <div>
          <Link to="/politica" className="block hover:underline">Política de privacidad</Link>
          <Link to="/contacto" className="block hover:underline">Contacto</Link>
        </div>
      </div>
    </footer>
  );
}
