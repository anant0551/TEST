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
