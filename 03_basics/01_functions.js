// function addTwoNumber(num1,num2)
// {
//     console.log(num1+num2);
//     or
//     return num1+num2
// }

// addTwoNumber(2,5)

function LoginUserMessage(username="anna") {
    if (!username) {
        console.log(("please enter a username"));
        return
    }
    return`${username}just logged In`
}
// console.log(LoginUserMessage("annu"));

function CalculateCartPrice(val1,val2,...num1) {
    return num1
}
// console.log(CalculateCartPrice(43404,4242));

const user = {
    username:"anant",
    prices:200
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user)
// handleObject({
//     username:""
// })

const myNewArray = [200,300,4000,55555]

function returnSecondvalue(getArray) {
    return getArray[1]
}
console.log(returnSecondvalue(myNewArray));