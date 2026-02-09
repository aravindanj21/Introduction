

// Employee Merge System (Spread Operator)
let empBasic={name:"Naveen",role:"Trainee",salary:20000}
let empPromotion={role:"Developer",bonus:10000}

let newObj={...empBasic, ...empPromotion,salary:40000,experience:"2Years"};
console.log(newObj);

// Shopping Cart (Spread + Array)
let cart1=["Shoes","Shirt"]
let cart2=["Watch","Cap"]

let newCart=[...cart1, ...cart2]
console.log(newCart)
let newCart1=[...cart1, ...cart2, "Bag"]
console.log(newCart1);
newCart1.unshift("Socks");
console.log(newCart1)


// Rest Operator Salary Calculator
function calculateTotalSalary(baseSalary, ...bonuses){
    let totalBonus=0;
    for (let bonus of bonuses) {
        totalBonus +=bonus;
    }
    
    return baseSalary + totalBonus;
}

let totalSalary= calculateTotalSalary(30000,2000,3000,5000);
console.log("Total salary:",totalSalary);


// Advanced Destructuring
let student = {
  name: "Rahul",
  marks: { maths: 90, science: 85, english: 88 }
};

let {
  name,
  marks: { maths, science }
} = student;

console.log(`${name} scored ${maths} in maths and ${science} in science`);


// Array Manipulation
let numbers=[10,20,30,40,50]

numbers.splice(2,1);   //remove 30 using slice
console.log(numbers)

numbers.splice(2,0,25)  // add 25 in it's place
console.log(numbers)

numbers.reverse();    //reverse array
console.log(numbers)

let num=numbers.includes(50);    //chech if 50 exist
console.log(num);

console.log("Final array:",numbers);


// Flatten Data
let apiData=[1,2,[3,4,[5,6,[7,8]]]]

let flatArray=apiData.flat(Infinity);   //convert into single array
console.log(flatArray);

let newData=flatArray.indexOf(6);   //index of 6
console.log(newData);


let users = [
  { name: "A", salary: 20000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 30000 }
];

let updatedUsers = users.map(user => ({
  ...user,
  salary: user.salary + 5000
}));

updatedUsers.sort((a, b) => b.salary - a.salary);

console.log(updatedUsers);


