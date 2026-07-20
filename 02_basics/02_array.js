const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)//array will take any datatype regardless

// console.log(marvel_heros)
// console.log(marvel_heros[3][1]);//array in array 

// const newhero = marvel_heros.concat(dc_heros)
// console.log(newhero)

//spread(...) seperates all elmt into indvisuals
const newhero = [...marvel_heros, ...dc_heros]
// console.log(newhero);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("hello"))
console.log(Array.from("hello"))
console.log(Array.from({name: "hitesh"}))//return empty as no key-value pair

let score1 = 100
let score2 = 200
let score3 = 300
// (Array.of)makes the array of given variables
console.log(Array.of(score1, score2, score3));