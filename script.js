//declaration and initialization
var a;//declare krna
var a = 12;//declare and initialize krna
//var window me add hota h and function scoped hota h
//aap firse declare krskte ho and error nhi ayega
let b = 2;
//let b = 1;//this cnt be done it will show error in console
const discount = 12;
//const is used where we know that we dont have to change the values
const dulha = "harsh";
const dulhan = "mns";
//Both var and let allow reassignment of values. That’s why in the console you can change let a = 5 to a = 10 without error.
function abcd() {
    if(true) {
        var c = 12;
    }
} //in js only var if declared in if loop can be used by whole function anywhere not just in the loop
//The difference is not about changing values, but about scope, redeclaration, and hoisting behavior
//scope(global,functional,block)
var a = 12;//global scope not in any {}braces
function abcd() {
    var a = 13;//functional scope
}
{
    var n = 13;//its going to be used in whole code//var is functional scoped
}
{
    let v = 13;//let is blocked scope
}
//reasignment and redeclartion
//let a = 35;
//a = 49;//reassignment
//var b = 30;
//b = 45;
//var b = 46;//reassignment is allowed in var
//we cant do this in const
//TEMPORAL DEAD ZONE
//console.log(k);//it will show error that it cannot acces k before initialization mtlb js knows ki aage k defined hua h damnnn


let k = 23;
//tdz- means utna area jisme js ko pta toh h ki variable exist krta h par vo apko value ni deskta
//k ka tdz is from 38 line to 40
//HOISTING<- jb ek variable js m bnta h it gets divided into two parts the declaration part uper chlajata h and initialization part neeche
console.log(e);
var e = 13;//no error like in let because the undefined part is above console.log always thats hoisting
//do parts
var e = undefined;//HOISTING
e = 13;
//let bhi declare hojata h phle hi usme bhi hoisting hoti h islie error says that it cannot acces the variable before initialization
let z = 90; 
{
    let z = 45;
    console.log("inside:", z);

}
console.log("outside:", z); 