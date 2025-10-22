const { exec } = require('child_process');
exec('node generate.js', (err, stdout, stderr) => {
  if(err) console.error(err);
  else console.log(stdout);
});