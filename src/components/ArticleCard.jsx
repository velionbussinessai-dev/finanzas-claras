import React from 'react';
import { Link } from 'react-router-dom';
export default function ArticleCard({ article }) {
  return (
    <Link to={`/blog/${article.id}`} className="block p-4 rounded-xl bg-gray-900/40 border border-gray-800 hover:shadow-lg">
      <h4 className="font-semibold">{article.title}</h4>
      <p className="text-sm text-gray-400 mt-2">{article.excerpt}</p>
      <div className="mt-3 text-xs text-gray-500">{article.category} • {article.readingTime}</div>
    </Link>
  );
}
