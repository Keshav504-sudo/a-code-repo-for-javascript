// array is an obj, and are resizable in js
const myarr = [0,1,2,3,4,5,6]
const heros = ['ironman', 'hulk','spiderman']
console.log(myarr[1])

 // methods

// myarr.push(34)
// myarr.push(44)
// myarr.pop()
// console.log(myarr)

//slice extracts a portion of array without changing it
console.log("A ",myarr);
const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("B ", myarr);

const myn2 = myarr.splice(1,3)
console.log("C ", myarr);
console.log(myn2)
//splice add, remove or replaces elements in the og array

