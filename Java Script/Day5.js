// console.log("number 1")
// console.log("number 2")

// // setTimeout(() => {
// //     console.log("Ajith")
    
// // }, 2000);


// async function name() {
//     var name= await "jithu"
//     console.log(name);
    
// }
// name()

// console.log("number 3")
// console.log("number 4")
// old Method 


// fetch("https://dummyjson.com/products").then((response)=>{
//     // console.log(response.json());
//     return response.json()

// }).then((data)=>{
//     console.log(data.products);

// }) .catch((e)=>{
//     console.log("error")
// })


// // old method 
// fetch("https://dummyjson.com/users").then((response)=>{
//     return response.json();
// }).then((data)=>{

//     console.log(data.users[6].phone);

// }).catch((e)=>{

//     console.log(error);
// })




// fetch("https://dummyjson.com/comments").then((response)=>{
//     // console.log(response.json());
//     return response.json();
// }).then((data)=>{
//     console.log(data.comments[0].user["fullName"]);
// }).then((e)=>{
//     console.log("error");
// })

// New mwthod
async function fecthData() {
    try {
        
    var response = await fetch("https://dummyjson.com/recipes")
    var data= await response.json();
    console.log(data);
        
    } catch (error) {
        
    }

}
fecthData()