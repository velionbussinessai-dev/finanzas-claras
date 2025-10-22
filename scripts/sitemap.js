
const fs = require('fs');
const path = require('path');
const files = fs.readdirSync(path.join(__dirname,'../src/articles/generated')).filter(f=>f.endsWith('.json'));
const urls = files.map(f=>{
  const a = JSON.parse(fs.readFileSync(path.join(__dirname,'../src/articles/generated',f),'utf8'));
  return `<url><loc>https://TU_DOMINIO.com/article/${a.slug}</loc><lastmod>${a.date}</lastmod></url>`;
}).join('\n');
const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`;
fs.writeFileSync(path.join(__dirname,'../public','sitemap.xml'), xml);
console.log('sitemap creado');
