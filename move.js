const fs = require('fs');

let files = fs.readdirSync('./')

for (let i = 0; i < files.length; i++) {
  if (files[i].slice(0,4) === 'note' && files[i].slice(-4) === 'json') {
    let param = files[i].split('_');
    let num = param[1].replace('.json', '');
    let numnum = parseInt(num);
    let num2 = numnum + 1;
    if (numnum >= 166) num2++;
    if (num2 < 10) num2 = `00${num2}`; 
    else if (num2 < 100) num2 = `0${num2}`;
    else num2= '' + num2;
    let data = fs.readFileSync(`./${files[i]}`, 'utf-8');
    let yo = `./note${num2}/AWS_Parsing_${num2}.json`;
    console.log(yo);
    fs.writeFileSync(yo, data);
  }
}