
const carts =[20,50,'20','50','avb 50'];
let sum=0;
for (let i=0; i<carts.length; i++){
    const currentNumber=carts[i];
    const convertedNumber=parseInt(currentNumber);
    if (!isNaN(convertedNumber)) {
        sum=convertedNumber+sum;
    //    console.log(sum);
    }
}
console.log(sum);