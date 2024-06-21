// Singleton 
//Object.create

//Object literals

const mySym = Symbol("key1")


const JsUser = {
    name:"Anant",
    "full name":"Anant kumar Singh",
    [mySym]:"oukey1",
    age: 21,
    location: "Gorakhpur",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["monday","sunday"] 
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "anant@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "anantsingh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());