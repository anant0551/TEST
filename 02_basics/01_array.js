//array
const myarr = [0,1,2,3,4,5,6,7]
const myHero = ["guddu badmaas", "bilota"]

const myArr2 = new Array (1,2,3,4,5)
// console.log(myarr[1]);


// Array methods

// myarr.push(9)
// myarr.push(8)
// myarr.pop()

// myarr.unshift(10)
// myarr.shift()
// console.log(myarr.includes(10));
// console.log(myarr.indexOf(3));

// const newArr = myarr.join()

// console.log(myarr);
// console.log(newArr);

// slice , splice

console.log("A", myarr);

const myn1 = myarr.slice(1,3)

console.log(myn1);
console.log("B",myarr);

const myn2 = myarr.splice(1,3)
console.log("C",myarr);
console.log(myn2);