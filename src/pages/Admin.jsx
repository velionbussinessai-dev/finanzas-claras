
import { useState } from 'react';
export default function Admin(){
  const [msg,setMsg]=useState('');
  async function run(){
    setMsg('Generando artículos...');
    try{
      await fetch('/api/trigger-generate', { method:'POST' });
      setMsg('Solicitud enviada. Revisa GitHub Actions para ejecución real.');
    }catch(e){ setMsg('Error: '+e.message); }
  }
  return (
    <main className="container py-10">
      <h1 className="text-2xl font-bold mb-4">Panel Admin</h1>
      <p className="mb-4">Generación automática con GitHub Actions (configurada en repo).</p>
      <button onClick={run} className="px-4 py-2 bg-accent rounded">Generar ahora</button>
      <div className="mt-4 text-neutral-400">{msg}</div>
    </main>
  )
}
