
import { useParams, Link } from 'react-router-dom';
const modules = import.meta.glob('../articles/generated/*.json', { eager: true });

export default function Article(){
  const { slug } = useParams();
  const articles = Object.values(modules).map(m=>m.default||m);
  const article = articles.find(a=>a.slug===slug);
  if(!article) return <main className="container py-10"><h1>Artículo no encontrado</h1><Link to="/">Volver</Link></main>;
  const lang = localStorage.getItem('lang')||'es';
  return (
    <main className="container py-10">
      <article className="prose prose-invert max-w-none">
        <h1>{article.title[lang]}</h1>
        <p className="text-neutral-400">{article.description[lang]}</p>
        {article.content.map((p,i)=><p key={i}>{p[lang]}</p>)}
      </article>
      <div className="my-8 card">
        <h3 className="font-semibold mb-2">Productos recomendados</h3>
        <ul className="list-disc ml-5">{article.products?.map((p,i)=><li key={i}>{p}</li>)}</ul>
      </div>
      <div className="my-8 card">
        <h3 className="font-semibold mb-2">Enlaces de afiliados</h3>
        <ul className="list-disc ml-5">{article.affiliates?.map((a,i)=><li key={i}><a href={a} className="text-accent" target="_blank" rel="noreferrer">{a}</a></li>)}</ul>
      </div>
      <div className="my-8">
        {/* AdSense placeholder - replace with your AdSense snippet */}
        <div className="bg-neutral-800 border border-neutral-700 p-4 text-center rounded">[AdSense: pega aquí tu código]</div>
      </div>
    </main>
  )
}
