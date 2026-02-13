//  Custom Digital Clock
 setInterval(() => {

    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("clock").innerText =
        "Current Time: " + hours + " : " + minutes + " : " + seconds;

}, 1000);

//   Find Current Day Name
let today=new Date();
let day1=today.getDay();

let days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day2=days[day1];
console.log("Today is ",day2);


// Age Calculator (Basic)
let birthYear=2000;

let currentYear=new Date().getFullYear();

let age= currentYear - birthYear;

console.log("Current age ",age);


// Create Specific Date
let date2=new Date();

date2.setFullYear(2020);
date2.setMonth(7);
date2.setDate(15);

date2.setHours(10);
date2.setMinutes(30);
date2.setSeconds(15);

console.log(date2.toLocaleString());


// setTimeout & setInterval
setTimeout(function() {
    console.log("Welcome Naveen");

},3000);

let interval=setInterval(() => {
     console.log("Welcome Naveen");
},3000);

// Stop Interval After 5 Seconds
let count=1;

let interval1=setInterval(() => {
    console.log(count);
    count++;

    if(count>5) {
        clearInterval(interval1);
        console.log("Stop");
    }
},1000);


// Simple Promise
let number=15;

let number1= new Promise((resolve,reject) => {
      if(number > 10){
        resolve("Valid number");
      } 
      else{
        reject("Invalid number");
      }
});

number1
   .then((message) => {
       console.log(message);
   })

   .catch((error) => {
     console.log(error)
   })

   .finally(() => {
      console.log("Promise");
   });

// Fetch Product Prices
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    products.forEach((product) => {
      console.log("Product:", product.title);
      console.log("Price:", product.price);
      console.log("------------------------");
    });
  })
  .catch((error) => {
    console.error("Error fetching products:", error);
  });


function one(){
     console.log("one");
     }

function two(){
     console.log("two"); 
    }
    function three(){ 
        console.log("three");
     }
  one() 
  setTimeout(two,0)
  three()

//   one() runs immediately
//   setTimeout(two,0) Doesn't run immediately.It sends two() to the Web API. After that it moves to the callback queue.
//   It wait until the call stack is empty.
//   three() runs immediately. Because one() three() are synchronus function.
//   After all synchronus code finshes call stack become empty. Then event loop pushes two() from callback queue to call stack. Then it print two.
 
