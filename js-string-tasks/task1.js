// Count how many times a string has the letter `a`


const sentence ="what is the value of another all aaaaa a .";
let countA=[];
const splitSentence =sentence.split('');
for(let i=0; i<splitSentence.length ;i++){
    const value=splitSentence[i];
    if (value==="a") {
        const aValue=value;
        countA.push(aValue);
    }
}
console.log(countA.length);