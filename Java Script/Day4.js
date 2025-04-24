// Declarative function

function add(n1,n2){
    return n1 +n2
}
console.log(add(10,34));

const arr=function(){
    console.log("Hello")
}
arr()

setInterval(() => {
    // callback function
    console.log("revamp");
    
},100)