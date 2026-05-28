//repeat krane ko loop khte hain
//for while do while foreach forin forof
//kaha se jana hai kaha tak jana h kaise jana hai we will use for loops
//kaha jana h kab rukna hai kaise jana hai we will use while loops
//1 - 50 //for loop
//1 se jab tk hello na aajaye //while loop
//1 -100
for (let i= 1; i<101; i++) {
    console.log("natu sarangeyo");
}
//1 se jabtk 32 ajae'
let i = 1;
while (i<33) {
    console.log(i);
    i++;
}
//do while  ye ek bar jarur execute hoga chahe condition true ho ya false
let g = 15;
do {
    console.log(g);
    g++;
} while(g<10);
//break 
for (i=1; i<201; i++) {
    console.log(i);
    if(i===24){
        break;//break loop ko rok deta hai
    }
}
//continue
for (i=1; i<27; i++) {
    if (i === 24){
        continue;//continue loop ko skip kr deta hai
    }
    console.log(i);
} 