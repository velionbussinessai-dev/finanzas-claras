
const fs = require('fs');
const path = require('path');
const slugify = require('slugify');
const templatesDir = path.join(__dirname,'../src/articles/templates');
const outDir = path.join(__dirname,'../src/articles/generated');
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir,{recursive:true});
const templates = fs.readdirSync(templatesDir).filter(f=>f.endsWith('.json'));
const now = new Date().toISOString();
let count=0;
templates.forEach(t => {
  const tmp = JSON.parse(fs.readFileSync(path.join(templatesDir,t),'utf8'));
  for(let i=1;i<=10;i++){
    const title_es = `${tmp.title.es} — Parte ${i}`;
    const title_en = `${tmp.title.en} — Part ${i}`;
    const slug = slugify(title_es, {lower:true, strict:true});
    const article = {
      title: { es: title_es, en: title_en },
      description: { es: tmp.description.es, en: tmp.description.en },
      content: tmp.content.map(c=> ({ es: c.es, en: c.en }) ),
      keywords: tmp.keywords,
      date: now,
      slug,
      lang: 'es',
      affiliates: tmp.affiliates,
      products: tmp.products
    };
    fs.writeFileSync(path.join(outDir, `${slug}-${i}.json`), JSON.stringify(article,null,2));
    count++;
  }
});
console.log('Generados',count,'artículos');
