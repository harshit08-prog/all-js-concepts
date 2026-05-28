!!"hello";
console.log(!!"hello");//!! double exclamation can be used to identify the truthy and falsy nature of values and data types
   // IF ELSE ELSE IF
   //switch case
   //early return pattern\
   //if (condition) direct (true or false ) (koi condition jo true false m convert hori ho) ya fir koi bhi esi cheez likhskte ho
   // jo naa true h na false vha vo usko truthy value ya falsy value assign krdega'

   switch (2) {
    case 1:
        console.log("case 1");
        break;
        case 2:
            console.log("case 2");
        case 3:
            console.log("case 3");
            break;
    default:
    
   }
   function getVal(val) {
    if (val<25) return "less than 25";
    if (val<50) return "less than 50";
    if (val<75) return "less than 75";
    if (val<100) return "less than 100";//early retunr pattern is less bulky and let you check small range first so code exit early as possible
   }

  console.log(getVal(23));
  // write a function getGrade(score) that:
  // takes a student's marks (0 to 100)
  // return the grade based on the logic
  //90-100 a++
  //80-89 a
  //70-79 b
  //60-69 c
  //33-59 d
  //0-33 f
  //anything else invalid marks

  function getGrade(score) {
    if (score>=90 && score<=100) return "a++";
    if (score>=80 && score<90) return "a";
    if (score>=70 && score<80) return "b";
    if (score>=60 && score<70) return "c";
    if (score>=33 && score<60) return "d";
    if (score>=0 && score<33) return "f";
    return "invalid marks";
  }
  console.log(getGrade(85));
  //rock paper scissors logic
  function rps(player1 , player2) {
    if (player1 === player2) return "draw";
    if (player1==="rock"&&player2==="scissors") return "player1 wins";
    if (player1==="paper"&&player2==="rock")   return "player1 wins";
    if (player1==="scissors"&&player2==="paper") return "player1 wins";
    return "player2 wins";

  }
console.log(rps("rock","paper"));
