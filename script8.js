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
var d= [ 'harshit', ' archit', 'suraj', 'ghandu'];
d.splice(1,2,'harshuu', 'dick');
console.log(d);
console.log(d[d.length-1]);
var f = [10,12,32,45]
f[10] = 100;
console.log(f.length);
var h = [11,23,'harsh',[11,22,33]]
console.log(h[3][2]);
console.log(h.indexOf(22));
var j = [[11,22,33],[23,33,,44],[12,34,56]];
console.log(j[0][2]+j[2][0]+j.length);
j.reverse();
console.log(j);
var t = [21,34,56,789,90,];
t.sort((a,b)=>a-b);// to sort double digits data in ascending order
console.log(t);
let arr2 = [10,23,45,67,78];
for(let a = 0; a<arr2.length;a++){
    console.log(arr2 [a]);//output is array itself because a is working as index of array
}
// adding elements by loop in empty array
var arr1 = [];
for( let a = 0; a< 100;a++){
    arr1.push( a + 1);
}
console.log(arr1);
var arr3 = arr2.slice(1,3);
console.log(arr3);//extracting and copying a portion of array
//concatenation of aarray is also a non mutating method
var arr4 = arr2.concat(arr3);
console.log(arr4);
arr4.concat([1,2,3,4,5]);
//includes method is used to check whether an array contains a particular element or not
var arr5 = [1,2,3,4,5];
console.log(arr5.includes(3));
console.log(arr5.includes(6));//output given as true or false
/////
/////