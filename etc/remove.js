const fs = require('fs');

let dirs = fs.readdirSync('../notes/');

for (let i = 0; i < dirs.length; i++) {
  let num = i + 1;
  if (num < 10) num = `00${num}`; 
  else if (num < 100) num = `0${num}`;
  if (fs.existsSync(`../notes/${dirs[i]}/Note_Before_Truncate${num}.txt`)) {
    fs.unlinkSync(`../notes/${dirs[i]}/Note_Before_Truncate${num}.txt`);
    process.stdout.write('-');
  }
}