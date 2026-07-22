/*iffi or immediately invoked function expression, fn defined and executed immediately after its creation. 
Avoid global variable pollution, Encapsulate logic.*/
// (function defnition) (execution call) => ()()
// simple/unamed iife
(function chai(){
    console.log(`DB connect`);
})(); //(;)needed to tell iife where to stop

//named iife 
( (name)=>{
    console.log(`db connected 2, ${name}`);
} )('keshav');

