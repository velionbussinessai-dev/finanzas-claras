import React from 'react';
import { useParams } from 'react-router-dom';
import ARTICLES from '../data/articles';
import AdSlot from '../components/AdSlot';
import ArticleCard from '../components/ArticleCard';

export default function ArticlePage(){
  const { id } = useParams();
  const article = ARTICLES.find(a => a.id === id);
  if(!article) return <main className="max-w-4xl mx-auto px-6 py-10">Artículo no encontrado.</main>;
  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <article>
        <h1 className="text-3xl font-bold">{article.title}</h1>
        <div className="mt-2 text-sm text-gray-500">{article.category} • {article.readingTime}</div>
        <div className="mt-6 text-gray-300 leading-relaxed whitespace-pre-line">{article.content}</div>
        <AdSlot className="mt-8" />
        <section className="mt-10">
          <h3 className="font-semibold">Artículos relacionados</h3>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            {ARTICLES.filter(a=>a.id!==article.id).slice(0,4).map(a=> <ArticleCard key={a.id} article={a} />)}
          </div>
        </section>
      </article>
    </main>
  );
}
