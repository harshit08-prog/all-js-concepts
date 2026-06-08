//CREATING AN ARRAY
let marks = [10,20,30,40,50];
//ACCESSING AN ARRAY
console.log(marks[0]);
//MODIFYING AN ARRAY
marks[0] = 23;
console.log(marks[0]);
 //METHODS IN ARRAY
marks.push(60);//ARRAY M VLUE ADD KARNA
console.log(marks);
marks.pop();
console.log(marks);//AKHRI VALUE HTANA
marks.shift()//phli value htana
marks.unshift(3);//phli VALUE ADD KARNA
console.log(marks);
//[3,20,30,40,50]\
marks.splice(2,1,35,36);//2nd index se 1 value htana aur uski jagah 35 aur 36 add karna
console.log(marks);
let arr = [1,2,3,4,5,6];
let newarr = arr.slice(1,5);//1st index se 5th index tk ki value nikalna
console.log(newarr);
arr.reverse();//reverse the main array
let sdf = [1,2,3,4,5,6,7,8,9];
sdf.sort(function(a,b)
{return b - a;//descending order
})
console.log(sdf);
//foreach
sdf.forEach(function(element){
    console.log(element+5);//sdf array ke har element me 5 add krke print krna
});
//MAP
let skf = sdf.map(function(value){
    return value*2;//sdf array ke har element ko 2 se multiply krke naya array bnana
})
console.log(skf);
let sgf = skf.map(function(value){
    return 3;
})
console.log(sgf);//skf array ke har element ko 3 se replace krke naya array bnana
let sf = sdf.map(function(value){
    if(value>5)
        return 67;//sdf array ke har element me se 5 se bde element ko 67 ans baki ko undefined krke naya array bnana    
})
console.log(sf);
//map() = transform all elements.

//filter() = pick only the ones that match.
//FILTER
//humesha return krega true ya false
let sfg = sdf.filter(function (value){
    if(value>5)
        return true;//ab isme baki sb ki jgha undefined ni likha ayega
})
console.log(sfg);
let sff = sdf.filter(function (value){
    if(value>5)
        return false;
    else 
        return true;//ye ni likha to blank array dfega [];
});
console.log(sff);
//reduce
let sh = sdf.reduce(function(accumulator,val){//accumulaator me value update hoti rhegi sum hoke
    return accumulator + val;
}, 0);//sdf array ke sare element ko add krke ek value bnana, 0 isliye likha kyuki ye starting value h accumulator ki
console.log(sh);
//find
let ss = sdf.find(function(val) {
    return val>5;//sdf array me se pehla element jo 5 se bda hoga usko return krna
})
console.log(ss);
//make an object 
let array = [{ id: 1, key:1}, { id: 2, key:2}, {id:3 , key:1}];
let neww = array.find(function(val ) {
    return val.key===1;//array me se pehla element jiska key 1 hoga usko return krna
})
console.log(neww);
//SOME Return Value:

//true → if any element satisfies the condition.

//false → if none do.
let sss = sdf.some(function (val) {
    return val>99;//sdf array me se koi element 99 se bda h to true ni to false return krna
})
console.log(sss);//OUTPUT FALSE
//EVERY 
//true → if all elements satisfy the condition.

//false → if any one fails. 
let ssss = sdf.every(function (val) {
    return val>0;//sdf array ke sare element 0 se bde h to true ni to false return krna
})
console.log(ssss);//OUTPUT TRUE 
//destructuring
let [a,b,c,d,,f] = sdf;//sdf array ke elements ko a,b,c,d,e,f me assign krna
console.log(a,b,c,d,f);  
//  spread operator
let arr3 = [1,2,3];
let arr4 = [...arr3,4,5,6];//arr3 ke sare element ko arr4 me add krna aur uske baad 4,5,6 bhi add krna
console.log(arr4);
