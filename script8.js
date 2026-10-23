//array
var a = ['harshit','aman','ayush']
console.log(a[0]);//accessing particular element
//updating value
a[2] =30;
console.log(a);
//checking length of an array
console.log(a.length);
//checking the element at last index
//position of last element will be a.length-1;
 console.log(a[a.length-1]);



a.push(20);
console.log(a);
a.pop();
console.log(a);
a.unshift(23);
console.log(a);
a.shift();
console.log(a);
//pushnpop do fast execution than shift unshift
//splice
var arr = [11,22,33,44,55]
arr.splice(2,2);
console.log(arr);
arr.splice(2,2,44);
console.log(arr);