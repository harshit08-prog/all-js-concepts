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