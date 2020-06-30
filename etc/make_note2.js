const fs = require('fs');

let file = fs.readFileSync('./FULL.txt', 'utf-8');

let lines = file.split('\r\n');

for (let i = 0; i < lines.length; i++) {
  let parts = lines[i].split('^%^%^%');
  let output = '';
  output += 'PROMPT:\r\n\r\n';
  output += `${parts[0]}\r\n\r\n`;
  output += 'RESPONSE:\r\n\r\n';
  output += parts[1];
  let num = i + 1;
  if (num < 10) num = `00${num}`; 
  else if (num < 100) num = `0${num}`;
  fs.writeFileSync(`../notes/note${num}/Note_Before_Truncate${num}.txt`, output);
}