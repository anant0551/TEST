var c = 50
let a = 200
if (true) {
    let a=10
    const b=20
}

// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "anant"
    
    function two (){
        const website = "github"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if (true){
    const username = "anant"
    if (username==="anant") {
        const website = "github"
      // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}