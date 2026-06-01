//numericals
//identify the output
function sayhi(name = 'harshit') {//here name = harshit is a default parameter
    console.log('hi' + name);
}
sayhi();
//use rest parameters to store any number of scores and return the total of them
function getScore(...score){//to store multiple values as array
    let total = 0; //initial value of sum
    score.forEach(function(val) {//array ko pureko direct thori add krenge islie val se ek ek value uthayenge jodenge
    total = total + val;
    })
    return total;//waps krdo sum
}
console.log(getScore(10,12,13,14,15));

function checkAge(age) {
    if ( age < 18) return ("too young");
    return "allowed";
}
        
console.log(checkAge(34));
// convert a impure function into pure functions
let a = 22;
function ui(num) {
    a =+ num;
}
//pure form
function ui(num) {
    let newTotal = total;
    newTotal =+ num;
}
//conclude the output
function outer() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
        
    }; 
}
const val = outer();
val();
val();
//   outer()
//  ┌───────────────────────────────┐
//  │ let count = 0                 │
//  │ return inner()                │
//  └───────────────┬───────────────┘
//                  │
//                  ▼
// val = inner()   (closure remembers count)

// Execution:
//  val() ──► count = 0+1 = 1 ──► print 1
//  val() ──► count = 1+1 = 2 ──► print 2


       
