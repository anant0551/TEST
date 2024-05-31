// Dates 

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2024,0,21)
// let myCreatedDate = new Date(2024,0,21,5,2)
// let myCreatedDate = new Date("02-21-2024")
let myCreatedDate = new Date("2024-02-21")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

// `${newDate.getDate()} and the time`

console.log(newDate.toLocaleString('default',{
    weekday: "long"           //2 more options
}))