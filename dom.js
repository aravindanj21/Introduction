// let bookName;

// bookName="Harry Potter";

// let bookAuthor = "J.k.Rowling",
// bookPublisher="code io",
// bookPart="Prisoner of Askaban";

// bookName="HP";

// console.log(bookName, bookAuthor,"\n",bookPublisher)

// let student, name;
// student="aravindan";
// name=student;
// console.log(name)

// const uname="abc@gmail.com";
// const pwd="thisismypassword"

// const WHITE_COLOUR="fff";
// const BLACK_COLOUR="###"

// login(uname,pwd);

// let result=confirm("Do you want to continue?")
// console.log(result)

// let name=prompt("Enter your name");
// console.log(name)

// let city=prompt("Enter your city:" ,"Chennai")
// console.log(city)

// document.write("Hello javascript");

// let basicSalary=60000;
// let bonusPercentage=10;

// function calculateSalary(basicSalary,bonusPercentage){
//     let bonus=(basicSalary * bonusPercentage) /100;
//     let grossSalary=basicSalary + bonus;
//     let tax=grossSalary * 0.05;
//     let finalSalary=grossSalary - tax;

//     console.log("Basic Salary:", basicSalary);
//     console.log("Bonus Percentage:", bonusPercentage + "%");
//     console.log("Bonus Amount:", bonus);
//     console.log("Gross Salary:", grossSalary);
//     console.log("Tax Deduction (5%):", tax);
//     console.log("Final Salary:", finalSalary);

//     return finalSalary;
// }

// calculateSalary(basicSalary,bonusPercentage);


// function generateResult(name,marksArray){
//     let total=0;

//     for (let i=0; i<marksArray.length; i++){
//         total +=marksArray[i];
//     }

//     let average=total/marksArray.length;

//     let grade;
//     if (average >=80) {
//         grade="A";
//     }else if(average >=60){
//         grade="B";
//     }else if(average >=40){
//         grade="C";
//     }else{
//         grade="Fail"
//     }

//     return {
//         studentName: name,
//         totalMarks: total,
//         averageMarks: average,
//         grade: grade
//     };

// }

// let result=generateResult("Aravindan",[90,80,78,96,86]);
// console.log(result);

// function demo(){
//     if(true){
//         var a=10;
//         let b=20;
//     }
//     console.log(a);
//     console.log(b);
// }

// demo();

// function demo(){
//     var a;
//     let b;

//     if(true){
//         a=10;
//         b=20;
//     }
    
//     console.log(a);
//     console.log(b);
// }

// demo();

//  console.log(x);
//  var x=100;

//  console.log(y);
//  let y=200;

// function generateInvoice(orderId){
//     console.log("Invoice generated for orderId:",orderId)
// }

// function processOrder(orderId,callback){
//     console.log("order Processed");
//     callback(orderId);
// }

// processOrder(101,generateInvoice)


// function priceBuilder(basePrice) {
//     return function (discount) {
//         return function (tax) {
//             let discountAmount = (basePrice * discount) / 100;
//             let priceAfterDiscount = basePrice - discountAmount;

//             let taxAmount = (priceAfterDiscount * tax) / 100;
//             let finalPrice = priceAfterDiscount + taxAmount;

//             return finalPrice;
//         };
//     };
// }

// let finalAmount = priceBuilder(2000)(15)(18);
// console.log("Final Price:", finalAmount);


// const CompanyModule = (function () {

//     let companyCode = "ABC-9878";

//     function getCompanyStatus() {
//         return "Company is Active. Code verified internally.";
//     }

//     return {
//         getCompanyStatus: getCompanyStatus
//     };

// })();

// console.log(CompanyModule.getCompanyStatus());


// function* orderIdGenerator() {
//     let orderNumber = 1000;

//     while (true) {
//         orderNumber++;
//         yield `ORD${orderNumber}`;
//     }
// }

// const orderGen = orderIdGenerator();

// console.log(orderGen.next().value);
// console.log(orderGen.next().value); 
// console.log(orderGen.next().value); 

// function* couponSpin() {
//     yield "10% OFF";
//     yield "20% OFF";
//     yield "50% OFF";
//     yield "No Luck";
//     yield "Jackpot";
// }

// const spin = couponSpin();

// console.log(spin.next().value); 
// console.log(spin.next().value); 
// console.log(spin.next().value); 
// console.log(spin.next().value); 
// console.log(spin.next().value); 


let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    console.log(`${product} added to cart - ${price}`);
}


function calculateTotal() {
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    console.log("Cart Total:", total);
    return total;
}


function applyDiscount(total) {
    return function (discount) {
        return function () {
            let discountAmount = (total * discount) / 100;
            let afterDiscount = total - discountAmount;

            let tax = (afterDiscount * StoreConfig.getTaxRate()) / 100;
            return afterDiscount + tax;
        };
    };
}

function* generateCoupon() {
    yield "10% OFF";
    yield "20% OFF";
    yield "No Luck";
    yield "50% OFF";
}

function processPayment(amount, callback) {
    console.log("Processing payment of ", amount);
    callback("Payment Successful ");
}

function paymentStatus(message) {
    console.log(message);
}

const StoreConfig = (function () {
    const taxRate = 18; 

    return {
        getTaxRate() {
            return taxRate;
        }
    };
})();

addToCart("Laptop", 100000);
addToCart("Mouse", 2000);

let total = calculateTotal();

const couponGen = generateCoupon();
let coupon = couponGen.next().value;
console.log("Coupon Applied:", coupon);

let discount = coupon.includes("%") ? parseInt(coupon) : 0;

let finalAmount = applyDiscount(total)(discount)();
console.log("Final Amount with Tax:", finalAmount);

processPayment(finalAmount, paymentStatus);