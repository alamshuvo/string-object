
// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 
const sentence="eeeiiiaou";
let checkedSentence=[];
let splitedSentence=sentence.split('');
for(let i=0; i<splitedSentence.length; i++){
    const value=splitedSentence[i];
    if (value==="a"||value==="e"||value==="i"||value==="o"||value==="u") {
        const aValue=value;
        checkedSentence.push(aValue);
    }
}
if (checkedSentence.includes("a")&&checkedSentence.includes("e")&&checkedSentence.includes("i")&&checkedSentence.includes("o")&&checkedSentence.includes("u")) {
    console.log(`this is a sentence that all vowels word here`);
}
else{
    console.log(`thsi is a sentence that one or multiple vowels word missing here`);
}