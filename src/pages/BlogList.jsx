import React from 'react';
import ArticleCard from '../components/ArticleCard';
import ARTICLES from '../data/articles';

export default function BlogList(){
  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-semibold">Blog</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        {ARTICLES.map(a => <ArticleCard key={a.id} article={a} />)}
      </div>
    </main>
  );
}
