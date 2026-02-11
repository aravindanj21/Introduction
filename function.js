//forEach() Practice
let subjects=["Maths","Science","English","History"]

let result="";

subjects.forEach(function(subject,index){
    result+=`subject ${index + 1}: ${subject}\n`;
});

console.log(result)


// forEach is designed only for looping.
// It execute function for each element and does not create or return a new array.
// It always return undefined

// map() Practice
let prices=[100,200,300,400]

let newPrices=prices.map(function(price){
    return price + (price * 0.10);

})

console.log(newPrices);

// filter() Practice
let students=[
    {name: "A", marks:45},
    {name: "B", marks:75},
    {name: "C", marks:35},
    {name: "D", marks:85}
]

let higherStudent=students.filter(student => student.marks >50);

console.log(higherStudent);

// find() Practice
let students1=[
    {name: "A", marks:45},
    {name: "B", marks:75},
    {name: "C", marks:35},
    {name: "D", marks:85}
]

let firstStudent=students1.find(student => student.marks >50);

console.log(firstStudent);

// find()
// Retuns only the first matching Element.
// Stops searching once it finds a first matching Element.
// Returns undefined if no match

// filter() 
// Returns all matching Element.
// Checks entire Array.
// Returns empty array if no match

// reduce() Practice
let cart=[
    {item: "Shirt", price:1000},
    {item:"Shoes", price:2000},
    {item:"watch",price:3000}
];

let totalPrice=cart.reduce((ac,current) =>{
    return ac + current.price;
}, 0);

console.log(totalPrice);

let totalTax=cart.reduce((ac,current) =>{
    return ac + current.price*1.05;

},0);

console.log(totalTax);

// some() Practice
let numbers=[1,3,5,7,8]

let numbers1=numbers.some((c,i,t) =>{
    return c%2==0
})

console.log(numbers1);

// every() Practice
let ages=[22,25,19,30];

let age18=ages.every(age => age >18);

console.log(age18);

// sort() Practice
let salaries=[50000,10000,70000,30000]

let ascending=salaries.sort((a,b)=>a-b);
console.log(ascending);

let descending=salaries.sort((a,b)=> b-a);
console.log(descending);

//sort fails for numbers because javascript converts numbers to string  and sort then alphabetically

// Array Conversion Methods
let arr=[10,20,30,40];

let arr1= arr.toString();
console.log(arr1);

let strArr=arr.join("-");
console.log(strArr);

// charAt() & charCodeAt()
let word="Developer";

let charAtVal=word.charAt(4);
console.log(charAtVal);

let charAt=word.charCodeAt(4);
console.log(charAt);

// slice()
let company="StacklyCompany";

let company1=company.slice(7,14);

console.log(company1);


// Case Conversion
let userInput="javaScript";
let upperCase=userInput.toUpperCase();
console.log("UpperCase:",upperCase);

let lowerCase=userInput.toLowerCase();
console.log("LowerCase:",lowerCase);


// trim()
let email="    naveen@gmail.com    ";
let email1=email.trim();
console.log(email1);


// includes()
let message="Welcome to JavaScript Training";
let message1=message.includes("JavaScript");

console.log(message1);


// split()
let movie="spider-man-no-way-home";
let movieArray=movie.split("-");
console.log(movieArray);


// indexOf() & lastIndexOf()
let text="programming";

let firstIndex=text.indexOf('m');
console.log(firstIndex);

let lastIndex=text.lastIndexOf('m');
console.log(lastIndex);

// replace()
let tech="I love python";
let replaceTech=tech.replace("python","javascript");

console.log(replaceTech);


// startsWith() & endsWith()
let fileName="report.pdf";
let fileName1=fileName.startsWith("report");
console.log(fileName1);

let fileName2=fileName.endsWith(".pdf");
console.log(fileName2);


// repeat()
let star="*";
let stars=star.repeat(10);
console.log(stars);



let employees=[
    {name:"Naveen",salary:50000},
    {name:"Arun",salary:30000},
    {name:"Kiran",salary:70000}
]

let upperCase1=employees.map(emp => ({
    ...emp,
    name:emp.name.toUpperCase()
}))

console.log(upperCase1);

let highSalary=employees.filter(emp =>emp.salary >40000);
console.log(highSalary);

let highSalary1 = employees.find(emp => emp.salary > 60000);
console.log(highSalary1);

let totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);
console.log(totalSalary);

let Employees1 = [...employees].sort((a, b) => b.salary - a.salary);
console.log(Employees1);
