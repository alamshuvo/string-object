// Count how many times a string has the letter `a` or `A`
const sentence ="what is the value of another all aaaaa A AAAAAAAAA .";
let countallA=[];
const splitSentence =sentence.split('');
for(let i=0; i<splitSentence.length ;i++){
    const value=splitSentence[i];
    if (value==="a" || value==="A") {
        const aValue=value;
        countallA.push(aValue);
    }
}
console.log(countallA.length);