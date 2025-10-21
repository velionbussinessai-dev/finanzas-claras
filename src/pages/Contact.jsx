import React, { useState } from 'react';
export default function Contact(){
  const [sent,setSent] = useState(false);
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold">Contacto</h2>
      <p className="mt-2 text-gray-400">Escríbenos para colaboraciones o dudas.</p>
      {!sent ? (
        <form className="mt-6 grid gap-3" onSubmit={(e)=>{e.preventDefault(); setSent(true);}}>
          <input required placeholder="Tu nombre" className="p-3 rounded-md bg-gray-800/60" />
          <input required type="email" placeholder="Tu email" className="p-3 rounded-md bg-gray-800/60" />
          <textarea required placeholder="Mensaje" className="p-3 rounded-md bg-gray-800/60" rows={6}></textarea>
          <button className="px-4 py-2 rounded-md bg-blue-600 font-semibold">Enviar</button>
        </form>
      ) : (
        <div className="mt-6 p-4 rounded-md bg-green-900/40">Gracias — te responderemos pronto.</div>
      )}
    </main>
  );
}
