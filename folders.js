const fs = require('fs');

for (let i = 0; i < 640; i++) {
  let num = '';
  if (i < 10) num = `00${i}`; 
  else if (i < 100) num = `0${i}`; 
  else num = `${i}`; 
  fs.mkdirSync(`./note${num}`);
} 