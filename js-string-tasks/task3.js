
// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 
// const sentence="ahdiff jfjfjfj";
// let checkedSentence=[];
// let splitedSentence=sentence.split('');
// for(let i=0; i<splitedSentence.length; i++){
//     const value=splitedSentence[i];
//     if (value==="a"||value==="e"||value==="i"||value==="o"||value==="u") {
//         const aValue=value;
//         // console.log(aValue);
//         checkedSentence.push(aValue);
//     }
// }
// if (checkedSentence.includes("a")&&checkedSentence.includes("e")&&checkedSentence.includes("i")&&checkedSentence.includes("o")&&checkedSentence.includes("u")) {
//     console.log(`this is a sentence that all vowels word here`);
// }
// else{
//     console.log(`this is a sentence that one or multiple vowels word missing here`);
// }


const sentance = "bcdfghjklmnopqrstuvwxyzaeiou";
// Check whether all vowels exists
const vowels = ["a", "e", "i", "o", "u"];
sentance.replace(" ", "");
let isAllVowelExist = true;
for (let i = 0; i < vowels.length; i++) {
  const vowel = vowels[i];
  let isVowelExist = sentance.includes(vowel);
  if (!isVowelExist) {
    isAllVowelExist = false;
    break;
  }
}
if (isAllVowelExist) {
  console.log(`All Vowel exists in sentence \n ${sentance} `);
} else {
  console.log(`Some vowels missing in sentence \n ${sentance} `);
}