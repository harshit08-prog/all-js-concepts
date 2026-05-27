//primitive<- esi values jinko copy krne par ek real copy miljae
//string,number,boolean ,undefined,symbol,bigint,null
//refernce<- inko copy krne par real copy nhi milti but refernece milta h parent ka
//object,arrays,function [] {} ()
//let a = 12;
//let b = a;
//console.log(a, b);
//a = a + 2;
//console.log(a,b);//a m change krna will not do changes in b b is still 12 because its a primitive data type
//------------------------------------<>-----------------------------//
let arr1 = [1, 2, 3];
let arr2 = arr1;
console.log(arr1, arr2);
arr1.push(4);
console.log(arr1, arr2);//arr1 m change krna will do changes in arr2 bcoz its a reference data type
arr2.pop();
console.log(arr1, arr2);//arr2 m change krna will do changes in arr1 bcoz its a reference data type
//------------------------------<>-----------------------------//
//single quotes double quotes back tick m wrapped data is string//
//if ek variable m aage jake koi value aayegi jo hume nhi pta then use null rkhdo
let SelectedStudents = null;
//undefined means koi variable bnaya and value nhi di toh ek default value use assign hojaegi terminal m
//in future jab libraries use krenge toh there caan be fields jo exist krte h paar humne khudse bhi bnaye h toh us cheez ko vo overwrite na kre islie we use symbol data type
let id = Symbol("id");
let id2 = Symbol("id");
console.log(id === id2);//false because symbol is unique
let obj = {
    name: "harsh",
    age: 23,
    city: "delhi",
    uid : 12,
}
//now tumne khudse uid ki value bnadi  uid.obj = 123; outside object toh vo usko rewrite na krde islie use symbol
let uid = Symbol("uid");
obj[uid] = 123;
console.log(obj);//{ name: 'harsh', age: 23, city: 'delhi', uid: 12, Symbol(uid): 123 }output
//big int is used after storing integers abpve max safe integer value in js which is 2^53-1
//recision bnaye rkhne k lie use big int 
let a = 123334444555555555n;
a + 3n;
console.log(a + 3n);//123334444555555555n

//------------------------------<>-----------------------------//
let u = 12;
u = true;
//js is a dynamic type language so we can change the type of variable at runtime
console.log(u);//true
//type of quirks
typeof Null;//object
typeof undefined;//undefined
typeof 123;//number
typeof "harsh";//string
typeof true;//boolean
typeof Symbol("id");//symbol
typeof 123n;//bigint
typeof NAN;//number
//TYPE COEERCION
//js m type coercion hota h yani ki js apne aap type convert kr deta h jab bhi zarurat hoti h
console.log(1 + "2");//'12'
console.log("3" - 1);//2
console.log("4" * 2);//8
console.log("5" / 2);//2.5
console.log("6" % 4);//2 
//every data type value is divided into true and false in js
//falsy values in js are 0, "", null, undefined, NaN, false
//truthy values in js are all other values except falsy values
!!0;//false
console.log(!!0);//false