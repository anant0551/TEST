//const instaUser = new Object()
const instaUser = {}

instaUser.id = "123asd"
instaUser.name = "Anshu"
instaUser.isLoggedIn = false

//console.log(instaUser);

const regularUser = {
    email: "anshu@yahoo.com",
    fullname: {
        userFullname: {
            first:"anant",
            middle:"kumar",
            last:"singh"
        }
    }
}

console.log(regularUser.fullname.userFullname.first);

const obj1 = {1:"a",2:"b",3:"c"};
const obj2 = {4:"a",5:"b",6:"c"};
const obj4 = {7:"a",8:"b",9:"c"};

// const obj3 = { obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);


const user = [
    {
        id: 1,
        email:"anshu@gml.com"
    },
    {
        id: 1,
        email:"anshu@gml.com"
    },
    {
        id: 1,
        email:"anshu@gml.com"
    }
]

user[1].email
// //console.log(instaUser);
// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

console.log(instaUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename:"level up with js",
    price: "free",
    courseInstrctor: "hitesh"
}

// course.courseInstrctor     how to access data from object
const {courseInstrctor:Instructor} = course

console.log(Instructor);
