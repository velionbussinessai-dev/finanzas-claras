import React from 'react';
import AdSlot from '../components/AdSlot';

export default function Tools(){
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold">Herramientas</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-800">
          <h4 className="font-semibold">Calculadora de interés compuesto</h4>
          <p className="text-gray-400 mt-2">Usa la calculadora en la página principal para estimaciones rápidas. Próximamente: simuladores avanzados.</p>
        </div>
        <div className="p-6 rounded-xl bg-gray-900/40 border border-gray-800">
          <h4 className="font-semibold">Simulador breve</h4>
          <p className="text-gray-400 mt-2">Próximamente: comparadores de comisiones y simuladores de cartera.</p>
        </div>
      </div>
      <AdSlot className="mt-8" />
    </main>
  );
}
