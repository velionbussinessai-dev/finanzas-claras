
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
export default function Header(){
  const [lang,setLang] = useState(localStorage.getItem('lang')||'es');
  const nav = useNavigate();
  function toggle(){
    const l = lang==='es'?'en':'es';
    setLang(l); localStorage.setItem('lang', l);
    nav('/');
  }
  return (
    <header className="bg-gradient-to-r from-[#021026] to-[#051124] border-b border-neutral-800 sticky top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center space-x-3">
          <div className="text-2xl">💰</div>
          <div className="text-xl font-bold">Finanzas Claras Pro</div>
        </Link>
        <div className="flex items-center space-x-4">
          <button onClick={toggle} className="px-3 py-2 border rounded hover:bg-neutral-800">{localStorage.getItem('lang')==='es'?'ES':'EN'}</button>
          <Link to="/admin" className="px-3 py-2 border rounded hover:bg-neutral-800">Admin</Link>
        </div>
      </div>
    </header>
  )
}
