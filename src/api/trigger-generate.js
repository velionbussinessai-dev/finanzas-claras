
export default function handler(req, res) {
  res.setHeader('Content-Type','application/json');
  res.end(JSON.stringify({ ok:true, message:'Trigger received. Configure GitHub Actions to dispatch generation.'}));
}
