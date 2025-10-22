import React from 'react';
import { Link } from 'react-router-dom';
import fs from 'fs';
import path from 'path';

let articles=[];
try{
  const files = fs.readdirSync(path.resolve('./src/articles/generated'));
  articles=files.map(f=>require(`../articles/generated/${f}`));
}catch(e){console.log('No hay artículos generados aún');}

export default function Home(){
  return (<div className="p-6 max-w-4xl mx-auto bg-gray-900 text-white min-h-screen">
    <h1 className="text-4xl font-bold mb-6">Finanzas Claras Ultra</h1>
    <ul>{articles.map(a=><li key={a.slug} className="mb-3">
      <Link to={`/article/${a.slug}`} className="text-blue-400 hover:underline">{a.title}</Link>
    </li>)}</ul>
  </div>);
}