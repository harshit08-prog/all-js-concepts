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