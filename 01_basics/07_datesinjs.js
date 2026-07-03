 let Mydate = new Date()
//console.log(Mydate.toString());
// console.log(Mydate.toDateString());
// console.log(Mydate.toLocaleDateString());
// console.log(typeof Mydate)

// const Mycreateddate = new Date(2023, 0, 31)
//console.log(Mycreateddate.toDateString());

// let mytimestamp = date.now()
// console.log(mytimestamp)
// console.log(Math.floor(Date.now()/1000));
// as the date is an object in js we can use get methods 
let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth())//6~~7
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDay())

// console.log(`the date is ${newDate}`)
//`${newDate.getDate()} and the time`
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})