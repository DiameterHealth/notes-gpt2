const fs = require('fs');
const natural = require('natural');
const wtokenizer = new natural.WordTokenizer();
const stokenizer = new natural.SentenceTokenizer();

let file = fs.readFileSync('./FULL.txt', 'utf-8');

let lines = file.split('\r\n');

let count = 0;
let data = [];

let currentItem = {}
let skipRest = false;

for (let i = 0; i < lines.length; i++) {
  let line = lines[i];
  if (line.slice(0,7) === 'PROMPT:') {
    currentItem.prompt = line.slice(8);
  }
  else if (line.slice(0,3) === '===') {
    if (currentItem.prompt) {
      if (currentItem.response) {
        currentItem.response = currentItem.response.replace(/\s/, ' ');
        if (wtokenizer.tokenize(currentItem.response).length > 60) {
          let sentences = stokenizer.tokenize(currentItem.response);
          console.log(sentences);
          let n = wtokenizer.tokenize(sentences[0]).length;
          let newText = sentences[0];
          if (n < 60) {
            for (let j = 1; j < sentences.length; j++) {
              newText += ` ${sentences[j]}`;
              n += wtokenizer.tokenize(sentences[j]).length;
              console.log(n);
              if (n > 60) break;              
            }
          }
          currentItem.response = newText;
        } 
        skipRest = false;
        data.push(currentItem);
        console.log(currentItem);
        currentItem = {};
        count++;
      }
      // else just proceed to adding data
    }
    // new prompt will start on next line
  }
  else {
    if (!skipRest) {
      if (!currentItem.response) currentItem.response = '';
      if (line.indexOf('<|endoftext|>') === -1) currentItem.response += ` ${line}`;
      else {
        currentItem.response += ` ${line.slice(0,line.indexOf('<|endoftext|>'))}`;
        skipRest = true;
      }
    } 
  }
}

let write = '';

for (let i = 0; i < data.length; i++) {
  write += `${data[i].prompt} ${data[i].response}\r\n`;
}

fs.writeFileSync('./output.txt', write)

