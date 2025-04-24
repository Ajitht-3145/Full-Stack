// global Scope
// var a = "Ajith";
// a = "Five"

// console.log(a);

// let a = "jithu";            // Blocked Scope
  
// a="five"
//  console.log(a);
      
    // Immutable & Blocked Scope Does n't Cahnge

//  const a =" Ajith"
// a= "five"
// console.log(a)

// var a ="Revamp"

//     {
//         let b= "Batch 15"
//         b= "Batch 16"
//         console.log(b);

// }
// {
//     const c = "immutable"
//     c= "Mute"
//     console.log(c);


// }

// console.log(a);

// operators Addition ,Subtraction ,Multiplication ,Division ,Modules

var num1 = 5


var num2 =5
  
// console.log("Addition of two numbers", num1+num2)
console.log(`Addition of two numbers ${num1+num2}`)
console.log(`Subtraction of two numbers ${num1-num2}`)
console.log(`Multiplication of two numbers ${num1*num2}`)
console.log(`Division numbers ${num1/num2}`)
console.log(`Modules of two numbers ${num1%num2}`)

// ++p       // Pre icrement

// p++       //Post increment
var num = 5;
console.log(++num);      // Pre icrement
// console.log(num)


// data types


/*
  String : encolsed with double qutoes ""
  number : provided OnLY 5
  Boolean : True or False
  null : 
*/ 

var number = "Ajirh" ;
console.log(typeof(number));

// function how  create

function add(){
    console.log(12+34)
}
add()
// Declaratic function
function sub(){
    console.log(12-89)
}
sub()

//Paramertic function

function sub(a,b){
    console.log(a-b);
 
}
sub(23,78)          // Arruguments


function add(c,d){
    console.log(c+d);

}
add(47,98)



var age = 15;
if(age >=18){
    console.log(` ${age} Eligible to vote `);
}else{
    console.log(`${age } Not Eligible for Vote`)
}



function vote(age){
    if(age >=18){
        console.log(`${age} Eligible for vote`)
    }else{
        console.log(`${age} Not Eligible for Vote`)
    }
}
vote(34)


// for loop Condition 
for(let  i=0; i<=6; i+=2){
    console.log(i);
}