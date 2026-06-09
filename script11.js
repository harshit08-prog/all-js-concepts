//objects
 let obj = {
    name : "satyarth",
    age : 19,
    city : "delhi"  
 }
 let aa = "name";
 //accessing object properties
 console.log(obj[aa]);//output satyarth
 console.log(obj.name);//output satyarth
 console.log(obj.aa);//output undefined
 //key value structure key on left side and value on right side
 //objects me key unique hote h
 //objects me value kisi bhi type ka ho skta h
 //objects me key string ya symbol type ka hota h
 //objects me key ko access krne ke liye dot notation ya bracket notation use krte h
 //DEEP ACCESS
    let obj2 = {
         name : "satyarth",
         adress : {
            city : "delhi",
            state : "delhi",
            locations :{
                lat : 28.7041,
                long : 77.1025,
             }
         }
            }
            //TO ACCESS LATITUDE
            console.log(obj2.adress.locations.lat);//output 28.7041
            //TO ACCESS LONGITUDE
            console.log(obj2["adress"]["locations"]["long"]);//output 77.1025
            //TO ACCESS CITY
            console.log(obj2.adress.city);//output delhi
            //TO ACCESS STATE
            console.log(obj2["adress"]["state"]);//output delhi
            //object destructuring thai is converting properties into variables to access them easily
            let {lat,lng} = obj2.adress.locations;//obj2.adress.locations ke properties ko lat lng me assign krna
            console.log(lat,lng);//output 28.7041 77.1025
            
        // FOR IN LOOPS
        let obj3 = {
         name : " harshit",
         age : 19,
         city : "delhi"  
      }
      for (let val in obj3) {
         console.log(val);//output name age city
      }
      //TO ACCESS THE VALUE OF KEYS
      for(let val in obj3) {
         console.log(obj3[val]); 
      }
      //object.keys() method
      console.log(Object.keys(obj3));//output [ 'name', 'age', 'city' ]
      //object.values() method
      console.log(Object.values(obj3));//output [ ' harshit', 19, 'delhi' ]
      //object.entries() method
      console.log(Object.entries(obj3));//output [ [ 'name', ' harshit' ], [ 'age', 19 ], [ 'city', 'delhi' ] ]
      //spread operator in objects
      let obj4 = {
         name : "satyarth",
         age : 19,
         city : "delhi"  
      }
      let obj5 = {...obj4, country : "india"};//obj4 ke sare properties ko obj5 me copy krna aur uske baad country property bhi add krna
      console.log(obj5);//output { name: 'satyarth', age: 19, city: 'delhi', country: 'india' } 
      //DEEP CLONING
      let obj6 = JSON.parse(JSON.stringify(obj2));//obj2 ko string me convert krna aur uske baad usko parse krke obj6 me assign krna
       obj6.adress.city = "mumbai";//obj6 ke adress ke city ko mumbai karna
      console.log(obj2.adress.city);//output delhi
      console.log(obj6.adress.city);//output mumbai
      //shallow cloning
      let obj7 = {...obj2};//obj2 ke sare properties ko obj7 me copy krna
      obj7.adress.city = "kolkata";//obj7 ke adress ke city ko kolkata karna
      console.log(obj2.adress.city);//output kolkata
      console.log(obj7.adress.city);//output kolkata