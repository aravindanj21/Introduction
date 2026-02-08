
// console.log("This is my new file");

// console.log("Hello")

// var a=10;
// a=20;
// var a =30;
// console.log(a);

// let b=5;
//  b=15;
// console.log(b);

// let x=10;
// let x=20;
// console.log(x);

// const y=50;
// y=100;
// console.log(y);

// var a=100;
// console.log(a);
// var a=200;
// console.log(a);

// 

// const y=700;
// console.log(y);

// var a=100;
// console.log(a);

// a=200;
// console.log(a);

// var a=300;
// console.log(a);

// let a=100;
// console.log(a);

// a=200;
// console.log(a);

// let a=300;
// console.log(a);

// var a=3.14;
// var b=5;
// var c=a*b*b;
// console.log(c);

// const a=3.14;
// const b=5;
// const c=a*b*b;
// console.log(c);

// var amount=1000;
// console.log("Amount is :" +amount);

// amount=2000;
// console.log("Amount is :" +amount);

// var amount=3000;
// console.log("Amount is:" +amount);

// let score=100;
// console.log("Score is :" +score);

// score =200;
// console.log("Score is :" +score);

// let score=300;
// console.log(score);

// const a=70;
// console.log(a);

// let num=25;

// if(num >= 10 && num <=50) {
//     console.log("Valid number");
// }
// else{
//     console.log("Invalid number")
// }

// let username="admin";
// let password="1234";

// if(username=== "admin" && password==="1234"){
//     console.log("Login Successful");
// }
// else{
//     console.log("Invalid Password")
// }


// let num=10;

// let result=(num%2===0) ? "Even" :"Odd";
// console.log(result);

// console.log((10==="10") ||(5 >2) && !(3 <1));

// console.log("5" +2);
// console.log("5" -2);
// console.log("5"*2);
// console.log("5"/2);

// let value="100";

// let numvalue=Number(value);
// console.log(numvalue);
// console.log(typeof numvalue);

// let value="100";
// let booleanvalue=Boolean(value);
// console.log(booleanvalue);
// console.log(typeof booleanvalue)

// console.log(Boolean(""));
// console.log(Boolean(" "));
// console.log(Boolean(0));
// console.log(Boolean([]))

// let marks=92;

// if (marks >=90){
//     console.log("Grade A")
// }
// else if(marks >=75) {
//     console.log("Grade B")
// }
// else if(marks >=50) {
//     console.log("Grade C")
// }
// else{
//     console.log("Fail")
// }

//  let signal="red";

// switch (signal){
//     case "red":
//         console.log("Stop");
//         break;

//         case "Yellow":
//             console.log("Ready");
//             break;

//             case "Green":
//                 console.log("Go");
//                 break;

//                 default:
//                     console.log("Invalid Signal")
// }

// let age=24;
// let height=165;
// let weight=60;

// if (age >= 18) {
//     if (height >= 160) {
//         if (weight >= 50) {
//             console.log("Selected");
//         } else {
//             console.log("Not Selected: Weight must be at least 50");
//         }
//     } else {
//         console.log("Not Selected: Height must be at least 160");
//     }
// } else {
//     console.log("Not Selected: Age must be at least 18");
// }
    

// for (let i=1; i <=20; i++) {
//     console.log(i)
// }

// for (let i=1; i<=20; i++) {
//     if(i%2 !==0) {
//         console.log(i)
//     }
// }


// let i=10;

// while (i>=1) {
//     console.log(i);
//     i--;
// }

// let i=1;

// do {
//     console.log(i);
//     i++;
// }while(i <=5);


// let word= "STACKLY";

// for (let ab of word) {
//     console.log(ab);
// }

// let student= {
//     name:"Arun",
//     course:"MERN",
//     duration:"6 months"
// };

// for (let key in student) {
//     console.log(key +": "+student[key]);
// }

// let username="admin";
// let password="1234";

// let result=(username ==="admin" && password ==="1234")
// ? "Login Success"
// : "Invalid Credentials ";
// console.log(result);

// let salary=70000;
// let experience=4;

// if (salary > 50000 && experience >3) {
//     console.log("Elgible for Bonus")
// }else{
//     console.log("Not Elgible")
// }

// let cartAmount = 4000;
// let discount;

// if (cartAmount >= 5000) {
//     discount = 20;
//     console.log("20% discount applied");
// } else if (cartAmount >= 2000) {
//     discount = 10;
//     console.log("10% discount applied");
// } else {
//     discount = 0;
//     console.log("No discount");
// }

// let count = 0;

// for (let i = 1; i <= 50; i++) {
//     if (i % 2 === 0) {
//         count++;
//     }
// }

// console.log("Even numbers count:", count);

// let hour = 7; 

// if (hour >= 1 && hour <= 6) {
//     console.log("Good Morning");
// } else if (hour >= 7 && hour <= 12) {
//     console.log("Morning");
// } else if (hour >= 13 && hour <= 16) {
//     console.log("Good Afternoon");
// } else if (hour >= 17 && hour <= 19) {
//     console.log("Good Evening");
// } else {
//     console.log("Good Night");
// }


let basicSalary=60000;
let bonusPercentage=10;

function calculateSalary(basicSalary,bonusPercentage){
    let bonus=(basicSalary * bonusPercentage) /100;
    let grossSalary=basicSalary + bonus;
    let tax=grossSalary * 0.05;
    let finalSalary=grossSalary - tax;

    console.log("Basic Salary:", basicSalary);
    console.log("Bonus Percentage:", bonusPercentage + "%");
    console.log("Bonus Amount:", bonus);
    console.log("Gross Salary:", grossSalary);
    console.log("Tax Deduction (5%):", tax);
    console.log("Final Salary:", finalSalary);

    return finalSalary;
}