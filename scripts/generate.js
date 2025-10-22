const fs = require('fs');
const path = require('path');

const templatesDir = path.join(__dirname, '../src/articles/templates');
const outputDir = path.join(__dirname, '../src/articles/generated');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
const templates = fs.readdirSync(templatesDir);

templates.forEach(file => {
  const template = JSON.parse(fs.readFileSync(path.join(templatesDir, file)));
  for(let i=1;i<=10;i++){
    const newArticle={...template};
    newArticle.title = template.title + ` (${i})`;
    newArticle.slug = template.title.toLowerCase().replace(/\s+/g,'-') + `-${i}`;
    newArticle.affiliates=["#af1","#af2"];
    newArticle.products=["Plantilla PDF","Curso breve"];
    newArticle.meta = { description: `Artículo sobre ${template.title}` };
    newArticle.adsense = true;
    fs.writeFileSync(path.join(outputDir,`${newArticle.slug}.json`), JSON.stringify(newArticle,null,2));
  }
});
console.log('Artículos generados automáticamente ✅');