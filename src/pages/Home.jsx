
import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
const modules = import.meta.glob('../articles/generated/*.json', { eager: true });

export default function Home(){
  const [q,setQ]=useState('');
  const [lang,setLang]=useState(localStorage.getItem('lang')||'es');
  useEffect(()=>{ const handle=()=>setLang(localStorage.getItem('lang')||'es'); window.addEventListener('storage', handle); return ()=>window.removeEventListener('storage', handle);},[]);
  const articles = useMemo(()=> Object.values(modules).map(m=>m.default||m).filter(a=> (a.lang||'es')===lang),[lang]);
  const filtered = articles.filter(a=> a.title[lang].toLowerCase().includes(q.toLowerCase()) || a.description[lang].toLowerCase().includes(q.toLowerCase()));
  return (
    <main className="container py-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-4xl font-bold">Finanzas Claras Pro</h1>
          <p className="text-neutral-400">Plataforma educativa bilingüe: contenido automático y guías prácticas.</p>
        </div>
        <div className="flex items-center space-x-3">
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Buscar artículos..." className="px-3 py-2 rounded bg-neutral-800 border"/>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <section className="md:col-span-2">
          <div className="grid gap-4">
            {filtered.map(a=> (
              <article key={a.slug} className="card flex items-start gap-4">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold"><Link to={`/article/${a.slug}`}>{a.title[lang]}</Link></h2>
                  <p className="text-neutral-400">{a.description[lang]}</p>
                  <div className="mt-2 text-sm text-neutral-500">{a.date}</div>
                </div>
                <div className="w-40"><img alt="" src="/favicon.ico" className="rounded"/></div>
              </article>
            ))}
          </div>
        </section>
        <aside>
          <div className="card mb-4"><h3 className="font-semibold mb-2">Tendencias</h3><p className="text-neutral-400">Artículos con más visitas (simulado)</p></div>
          <div className="card"><h3 className="font-semibold mb-2">Newsletter</h3><p className="text-neutral-400">Suscríbete para recibir los mejores artículos.</p></div>
        </aside>
      </div>
    </main>
  )
}
