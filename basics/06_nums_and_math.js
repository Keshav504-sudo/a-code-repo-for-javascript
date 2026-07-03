const score =400
// console.log(score)

const balance = new Number(100)
//console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(4))//after decimal

const othernumber = 23.5345
// console.log(othernumber.toPrecision(4))//total 4 units 

const hunreds = 100000
// console.log(hunreds.toLocaleString('en-in'))

//++++++++++++++++++++++++++++++math??????????????????/
// console.log(Math);
// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.1))//take higher num
// console.log(Math.floor(4.7))//lower
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)