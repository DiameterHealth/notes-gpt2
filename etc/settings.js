const fs = require('fs');
const pd = require('pretty-data').pd;

let settings = fs.readFileSync('./settings.txt', 'utf-8');
let lines = settings.split('\r\n');

for (let i = 0; i < lines.length; i++) {
  let output = {};
  let parts = lines[i].split(',');
  output.index = parts[0];
  output.gpt2 = {};
  output.gpt2.seed = parseInt(parts[1]);
  output.gpt2.samples = parseInt(parts[2]);
  output.gpt2.batch_size = parseInt(parts[3]);
  output.gpt2.length = parseInt(parts[4]);
  output.gpt2.temperature = parseInt(parts[5]);
  output.gpt2.top_k = parseInt(parts[6]);
  output.gpt2.top_p = parseInt(parts[7]);
  output.scores = {};
  output.scores.score1 = parseInt(parts[8]);
  output.scores.score2 = parseInt(parts[9]);
  let write = pd.json(output);
  let num = i + 1;
  if (num < 10) num = `00${num}`; 
  else if (num < 100) num = `0${num}`;
  fs.writeFileSync(`../notes/note${num}/Settings_Scores_${num}.json`, write);
}

