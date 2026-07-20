/*singleton is a design pattern that ensures only one instance of a particular object or class exists
throughout the lifetime of an application,and it provides a global point of access to that instance*/

//object literals
const jsuser = {
    name:"keshav",
    [mySym]: "mykey1",
    age:11,
    location: "jaipur",
    email: "mail@.com", 
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

jsuser.email = "hello@mail.com"
// console.log(jsuser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

//Every time you call Symbol(), it returns a completely unique value — even if you pass the same description.
// const s1 = Symbol("id");
// const s2 = Symbol("id");
// console.log(s1 === s2); // false

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());