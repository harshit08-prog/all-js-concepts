//function is used so that some particular line of code dont run at that time when we give signal only runs then
function dance() {//function declaration
 console.log("harshie dances")


}
dance();//this is the buton to tell harshie dance 
//function is also uded to make one line of code runs multiple time
dance();
dance();
dance();
//you can make function by declaring a variable too
let fnc = function(){//fnc is the name of function too
console.log("heyhey")
}//variable me save krne ko function expression khte h
//now call the function
fnc();
//fat arrow function in vriable
let fnk = ()=>{
    console.log("fat arrow function")
}
fnk();
//-------------------------------------------------------------------------------------------------
//if you want ki har baar new thing print ho by calling same function
//this can be done by giving a vlue in function and calling that value
function abcd(v1) {
    console.log(`${v1} is eating `)//backtics for saving dynamic value

}
abcd("harshit");
abcd("sneha");
abcd("harshie");
function abcde(v1,v2) {//v1 v2 parameters
    console.log(v1 + v2);
}
abcde(1, 2);//1 2 arguments
function add(v1,v2) {
    console.log(v1 + v2)//(undefined + undefined)
}
add();// output NaN
//to avoid this give default value 0 to parameters
function fng(v1 = 0, v2 = 0){
    console.log(v1 + v2 )
    
}
fng();
// jab argument bhot sare ho toh utne hi parmeter na bnane pade islie we will use concept of rest parameters
function bng(...val){
    console.log(val)
}
bng(1,2,3,4,5,6,7,8,9,0);
bng(2,3,4,5,4);//ek array ki form me answer ayega
// output ---[
//1, 2, 3, 4, 5,
//6, 7, 8, 9, 0
//]
//[ 2, 3, 4, 5, 4 ] two arrays bne
function bgh(a ,b ,c ,...val){
    console.log(a,b,c,val)
}
bgh(1,2,3,4,5,6,7,8);//output---1 2 3 [ 4, 5, 6, 7, 8 ]

//return
function ui(v1) {
    return 34 + v1;//if we do console.log only it shows value but return give value to use it further too
}
let val = ui(89);
console.log(val) ;
console.log(val + 24);
//FIRST CLASS FUNCTIONS
//TREATING AN ARGUMENTS VALUE AS A FUNCTION
function uk(v4){
    v4();
}
uk(function () {
console.log("heyaaaa");
});
//UK is a higher order function here cuz it accepts a function in parameter
function yk(){
 return function() {
    console.log("hellu");
 }
}
yk()();
//PURE FUNCTIONS
let c = 90;
function abvn() {
     console.log("heyheheehyhyh")
}//hence this function is not effecting the variable c
//impure function
function hui() {
    c++;
}//thiswill change the variable c

//CLOSURES
function huihui() {
    let v1 = 78;
    return function() {
        console.log(34 + v1);
    }
}
const vl = huihui();
vl();
// huihui() ───► creates v1 = 78
//      │
//      └──► returns inner() ───► remembers v1
//                                 │
//                                 └──► console.log(34 + v1)

//LEXICAL SCOPING
//FUNCTION KE ANDER FUNCTION K ANDER FUNCTION OR JO VARIABLE JIS FUNCTION ME BNA H VO VHA SE LEKE END TK OF FUNCTIONS USE HOSKTA H YE H USKI LEXICAL SCOPING
function uu() {
    let a = 9;// a is in outer function so  it can be used in 3 functions
    function ii() {
        let b = 7;//b can be used in two functions
        function kk() {
            let c = 90;//c can be used in only one function
        }
    }
}
//--------------------IIFE(immediately invoked function expression)--------------------------------------------------------------\\
//function ko naam mt do bracket m band krke immediately call krdo
(function () {

}) ()
//HOISTING HAPPENS IN FUNCTIONS TOO
// WE CAN CALL  A FUNCTION BEFORE DECLARING IT
//BUT WE CANNOT CALL A FUNCTION EXPRESSION BEFORE INITIALIZATION  IT WILL SHOW ERROR
