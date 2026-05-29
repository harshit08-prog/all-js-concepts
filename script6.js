// // //q1 print numbers from 1 to 10 using a for loop
  for(let i = 1; i<11; i++) {
     console.log(i)
 }
// // // q2 print numbers from 1 to 10 using a while loop
// // //for loop
 for (let m = 10; m>0; m++) {
 console.log(m);
  }
// // //while loop 
let m = 10;
while (m>0) {
   console.log(m);
    m++
 }
// // //q3 print even numbers from 1 to 20 using a for loop 
 for (let j = 1; j<=20; j++) {
    if (j%2 === 0) {
         console.log(j);
    } }
// // //q4 print odd numbers from 1 to 15 using a while loop
  let k = 1;
  while (k<16){
     if (k%2!==0){
         console.log(k);
      }
    k++;
  }
 //q5 print the multiplication table of 5
 for (let h = 5; h<51; h+=5){
      console.log(h);
  }
 for (let h = 1; h<11; h++){
     console.log(5*h);
 } 
// find the sum of numbers from 1 to 100
 //loop k baahr ek extra varible bnao sum name ka jisme value update hoti rahegi
 let sum = 0;
 for (let i = 1; i <101 ; i++) {
     sum = sum + i;

}
 console.log(sum);
// //print all numbers between 1 to 50 that are divisible by 3
for(let i = 1;i<51; i++) {
    if(i%3===0){
        console.log(i);
    }
}
//ask the user for a number and print whether each number from 1 to that number is even or odd
let num = prompt("enter a number ") ;
for (i = 1; i<=num ; i++) {
    if(i%2===0){
        console.log(i + "is even");
    } else {
        console.log(i + "is odd");
    }
}
//  count how many numbers between 1 and 100 are divisible by 5and 3
let count = 0;
for (let i = 1; i<101; i++) {
    if (i%3===0 && i%5===0) {
        count++;
    }
}
console.log(count);
// print first five odd number in a loop of 1 to 100
let count = 0;
for(let k = 1; k<100; k++) {
    if(k%2!==0) {
        count++
        console.log(k);
    }
    if(count === 5) {
        break;
    }
}