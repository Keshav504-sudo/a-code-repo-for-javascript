const name = 'keshav'
const repo_count = 500

// console.log(`My name is ${name} and my repo count is ${repo_count}`)

const gameName = new String('marketer')
// console.log(gameName[0])
// console.log(gameName.__proto__)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(4))// what char at posn
console.log(gameName.substring(2,5))
console.log(gameName.slice(-8,5))


//trim and replace 
const newString01 = "   newnaem01   "
console.log(newString01.trim())//removes whitespaces on both side


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));