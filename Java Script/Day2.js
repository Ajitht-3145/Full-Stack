// Loose Equality (==) => it check only Value
// Strict Equality (===) => it check both Value & Type


// var a = "10";   //number
// var b = 10;   //string

// if(a===b){
//     console.log("Both Are Equal");
// }else{
//     console.log("Both  Not Are Equal");

// }


// Array Start 
        //   0,1 ,2    ,3,   4,   5
// var arr = [10,20,30,"Ajith",true,null];

//Access the elements in arrary
// index value access to array => always start with (0) n-1 6-1=5 

// console.log(arr[ 3]);
// console.log(arr.length);

// Adding elements in Array
// arr[6]=10

// push ,  => element add in right side
// arr.push("Welcome")

// unshift    => element add in left side
// arr.unshift("Good")


// Modifing elements in Array 
// arr[2]= 40;
// arr[4]= false;
 
// removing the elements in array 

// arr.pop()  => end
// arr.shift()  => start
// console.log(arr);



// Object 

var obj = {
    name : "ajith",
    class: "Mern",
    Batch: 15,
    learn:true,
    classmates:["ram","janu"],
    things: {mobile:"Iphone",laptop:"Mac"}

}


// Accessing the properties  key in the Objects
// Dot notation
//  console.log(obj.things.laptop);

// Bracket Notation
// console.log(obj["things"].laptop);

//Modifiy The elements objects

// obj.name="jithu"
// obj["class"] = 10

//Adding Data
//  obj.timings= "5.45"
// obj['Qulification']= " Java"
// removing the elements in objects
// delete obj.name
// console.log(obj);

// declarative function
// function abc(){
//     console.log("Aji")
// }
// abc()


//Arrow Function
 var abc= () =>{
    console.log("Welcome Buddy")

 }
 abc()