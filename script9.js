// write a bmi calculator
function bmi(weight,height) {
    return weight/(height*height);
}         

console.log(bmi(90,1.8).toFixed(2));
//create a reusable discount calculator make it inhigher order function (hof)
function discount(discountvalue) {
    return function(price) {
    return price - (price*(discountvalue/100));
    }
}
let discounter = discount(10);//yha se discount function call hua jisne return kia ek or function discounter ko joki h price
console.log(discounter(1000));
                //  ┌──────────────────────────────┐
                //  │   discount(discountvalue)    │
                //  └──────────────┬───────────────┘
                //                 │
                //                 │  discount(10)
                //                 ▼
                //  ┌──────────────────────────────┐
                //  │ discountvalue = 10 store hua │
                //  │ (closure memory created)     │
                //  └──────────────┬───────────────┘
                //                 │
                //                 │  returns function(price)
                //                 ▼
                //  ┌──────────────────────────────┐
                //  │  discounter = function(price)│
                //  │  (yeh function 10 ko yaad     │
                //  │   rakhta hai closure se)      │
                //  └──────────────┬───────────────┘
                //                 │
                //                 │  discounter(1000)
                //                 ▼
                //  ┌──────────────────────────────┐
                //  │  price = 1000                │
                //  │  discountvalue = 10 (closure)│
                //  │  return price - price*10/100 │
                //  └──────────────┬───────────────┘
                //                 │
                //                 ▼
                //       Final Output = 900
//count++ ka khel
function counter() {
    let count = 0;
    return function (){
        count++;
        return count;

    }
}
 let c = counter();
    console.log(c());
    console.log(c());
    console.log(c());
    let d = counter ();
    console.log(d());
    console.log(d());
    console.log(c());
//3 Weather Widget + Sort Viz Vanilla JS + Fetch API + Java Sorting DOM manipulation + algorithms Live weather app — zero frameworks
//4 JS Expense Tracker + DS Demo JS ES6+ + localStorage + Java LL/Stack Advanced JS + data structures Expense tracker — pure JS, no libs
//done with functions basics
console.log("heyu");