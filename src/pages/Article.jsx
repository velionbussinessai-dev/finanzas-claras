import React from 'react';
import { useParams } from 'react-router-dom';
import fs from 'fs';
import path from 'path';

export default function Article(){
  const {slug}=useParams();
  let article=null;
  try{
    const files=fs.readdirSync(path.resolve('./src/articles/generated'));
    for(const f of files){
      const a=require(`../articles/generated/${f}`);
      if(a.slug===slug){article=a;break;}
    }
  }catch(e){console.log('Error leyendo artículos');}

  if(!article)return <h1 className="p-6">Artículo no encontrado</h1>;
  return (<div className="p-6 max-w-4xl mx-auto bg-gray-900 text-white min-h-screen">
    <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
    <p className="mb-4">{article.description}</p>
    {article.content.map((c,i)=><p key={i} className="mb-2">{c}</p>)}
    <div className="my-6"><h2 className="text-xl font-semibold mb-2">Productos recomendados</h2>
      <ul>{article.products.map((p,i)=><li key={i}>{p}</li>)}</ul>
    </div>
    <div className="my-6"><h2 className="text-xl font-semibold mb-2">Enlaces de afiliados</h2>
      <ul>{article.affiliates.map((a,i)=><li key={i}><a href={a} className="text-blue-400 hover:underline">{a}</a></li>)}</ul>
    </div>
    <div className="my-6">{article.adsense ? <div id="adsense">[Anuncio AdSense]</div> : null}</div>
  </div>);
}