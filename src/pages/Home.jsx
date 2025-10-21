import React from 'react';
import ArticleCard from '../components/ArticleCard';
import AdSlot from '../components/AdSlot';
import ARTICLES from '../data/articles';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-extrabold">Finanzas claras, decisiones inteligentes</h2>
          <p className="mt-4 text-gray-300">Guías paso a paso, herramientas y artículos para que empieces a tomar el control de tus finanzas hoy.</p>
          <div className="mt-6 flex gap-3">
            <a href="/blog" className="px-4 py-2 rounded-md bg-blue-600 text-black font-semibold">Leer artículos</a>
            <a href="/herramientas" className="px-4 py-2 rounded-md border border-gray-700">Usar calculadoras</a>
          </div>
        </div>
        <div>
          <div className="rounded-2xl p-6 bg-gray-900/40 border border-gray-800">
            <h3 className="font-semibold">Calculadora rápida: interés compuesto</h3>
            <QuickCompoundCalculator />
          </div>
          <AdSlot className="mt-6" />
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-2xl font-semibold">Últimos artículos</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {ARTICLES.slice(0,4).map(a => <ArticleCard key={a.id} article={a} />)}
        </div>
      </section>
    </main>
  );
}

function QuickCompoundCalculator(){
  const [P,setP] = React.useState(1000);
  const [r,setR] = React.useState(5);
  const [t,setT] = React.useState(10);
  const fv = React.useMemo(()=> P*Math.pow(1 + r/100, t), [P,r,t]);
  return (
    <div className="mt-4">
      <label className="block text-sm">Capital inicial (€)</label>
      <input type="number" value={P} onChange={e=>setP(Number(e.target.value))} className="mt-1 w-full rounded-md bg-gray-800/60 p-2" />
      <label className="block text-sm mt-2">Tasa anual (%)</label>
      <input type="number" value={r} onChange={e=>setR(Number(e.target.value))} className="mt-1 w-full rounded-md bg-gray-800/60 p-2" />
      <label className="block text-sm mt-2">Años</label>
      <input type="number" value={t} onChange={e=>setT(Number(e.target.value))} className="mt-1 w-full rounded-md bg-gray-800/60 p-2" />
      <div className="mt-3 p-3 rounded-lg bg-gray-900/50 border border-gray-800">
        <div className="text-sm text-gray-400">Valor futuro aproximado:</div>
        <div className="text-2xl font-semibold mt-1">€{Number(fv).toFixed(2)}</div>
      </div>
    </div>
  );
}
