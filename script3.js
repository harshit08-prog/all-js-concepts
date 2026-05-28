//arithematic operators
//+ - addition
//- subtraction
//* multiplication
/// division
//% modulus
//** exponentiation  */
//comparison operators
//== equal to
12==12;//true
12=="12";//true because it only checks value not type
//=== strict equal to
12===12;//true
12==="12";//false because it checks both value and type
//!= not equal to
12!=13;//true
12!="12";//false because it only checks value not type
//!== strict not equal to
12!==13;//true
12!=="12";//true because it checks both value and type
//assignment operator
let a = 12;//assignment operator
a+=2;//a = a + 2
console.log(a);
a-=10;
console.log(a);
a*=2;
console.log(a);
a/=2;
console.log(a);
a%=5;
console.log(a);
a**=3;
console.log(a);
//logical operators;
//&& || ! 
//unary operators are the operatorss that work on single operand
//++ -- typeof delete + - !
// let b = 5;
// ++b;
// console.log(b);
let c = 5;
c++ + c++;//5 + 6
console.log(c);
//prefix and postfix increement 
//ternary operator ?:
//condition ? true hui ka code: false hui ka code
12>13 ? console.log("12 is greater than 13") : console.log("12 is not greater than 13");
let s = [];
typeof s ;
console.log(typeof s);//object
//here is  a quirk so we use instanceof to check array and null
s instanceof Array;
console.log(s instanceof Array);//true

//REMEMBER INSTANCEOF ONLY WORKS WITH REFERNECE DATATYPES NOT WITH PRIMITIVE DATATYPES
//QUESTION
//what will be the output of this code
let x = 5;
console.log(x++ + ++x);//5 + 7 = 12
let z = 29;
let v = 79;
if (z>10 && v>50) {
    console.log("both conditions are true");
} else {
    console.log("one of the conditions is false");
}
let admin = true;
let isLoggedIn = false;
if (admin || isLoggedIn) {
    console.log("you have access to the dashboard");
} else {
    console.log("you dont have access to the dashboard");
}
let temp = 20;
if (!(temp<10)) {
    console.log("it is not cold outside");

} else{
    console.log("it is cold outside");
}
let r = 0;
if (r) {
    console.log("truthy value"); 
} else {
    console.log("falsy value");
}
let score = 76;
let grade = score>=90? "A": score>=80? "B": score>=70? "C": score>=60? "D": "F";
console.log(grade);