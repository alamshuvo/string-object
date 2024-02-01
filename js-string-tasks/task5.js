// Capitalize Every first Letter of each word in a String

const sentence="this is a serious learning flatform and my name is iftakhar";
let newSentence=[];
const modified=sentence.split(' ')
// console.log(modified);
for (let word of modified) {
    const chars=word.split('')
    // console.log(chars);
    chars[0]=chars[0].toUpperCase();
    // console.log(chars);
    let newWord= chars.join("");
    // console.log(newWord);
    newSentence.push(newWord);
    // console.log(newSentence);
}
// console.log(newSentence);
const finalSentence=newSentence.join(' ');
console.log(finalSentence);