

// Data Types

//String

let js = "javascript";

//console.log (typeof(js));


//let num = 50;
//console.log(typeof(num));

//let school = true;
//console.log(typeof(school));


//let person = [{name:"Tony", state:"Lagos"}]
//console.log (typeof(person));


//let lasop;
//console.log(typeof(lasop));


//let age = 50;
//let fName = "Tope";
//let lName = 'sade';
//let oName = `Sade`;

//console.log (`${oName} is ${age} years old`);
//console.log (oName + "is" + age + "years old");
//console.log (`kayode is ${age} years old`);


//.length
 //console.log (js.length)
 //console.log (js[6])
 //console.log(js.slice(0,4))

//document.write ('welcome to lasop')


//let name = prompt("what is your name");

//alert (`Your name is ${name}`)

//console.log (js.toUpperCase())



//let Fname = prompt ("what is your first name ");
//let Lname = prompt("what is your last name");
//let Oname = prompt ("What is your other name");



//alert (`your name is ${lName} ${fName.slice(0,1)} ${oName.slice(0,1)} `)

//let FnameFirstChar = Fname.slice(0,1) ;
//FnameFirstChar = FnameFirstChar.toUpperCase();
//let FnameOtherChar = Fname.slice(1, Fname.length).toLowerCase();
//let firstName = FnameFirstChar + FnameFirstChar

//alert (firstName)


// console.log(js.substring(4,10));
// console.log (js.includes("p"));
// console.log (js.repeat(5));
// console.log (js.split(""));
// console.log (js.split(" "));


// let skul = "welcome to lasop"

// console.log (skul.split(""));
// console.log (skul.split(" "));
// console.log (skul.replace("lasop" , "school"));


// let x = 20.7
// let pi = Math.PI
// console.log(pi);

// //Math.round()
// console.log(Math.round(x));
// console.log(Math.round(pi));

// //Math.ceil()
// console.log(Math.ceil(pi))

// //Math.Floor()
// console.log(Math.floor(3.54))

// //Math.min
// console.log(Math.min(1,2,3,4,5,6,78,6,4,3,24,24,3))


// //Math.max
// console.log(Math.max(1,2,3,4,5,6,78,6,4,3,24,24,3))

// //Math.Square
// console.log(Math.sqrt(40))

// //Math.random
// console.log(Math.random())

// console.log(Math.floor(Math.random() * 6))

// console.log(pi.toFixed(2))

// let z = 5
// let y = 3
// let u = z % y

// console.log (u)


// let p = 0 

// //p = p + 1 //z++
// //p = p + 1 //z++

// //p++

// p+=2
// console.log(p)

// p+=2
// console.log(p)

// p+=2
// console.log(p)



// z == y //
// z && y // z and y must be true
// z || y // either z or y is true


//CONDITIONAL STATEMENTS


//let today = "saturday"

//if (today === "saturday") {
   // console.log ("lets party")
//}else {
  //  console.log("we go to work")
//}


//let today = prompt("What day is today?");
//today = today.toLowerCase()

//if (today === "sunday") {
    //console.log ("go to church");
//}else if (today=== "monday") {
    //console.log("go to work");
//}else if (today=== "tuesday") {
    //console.log("go to work");

//}else if (today=== "wednesday") {
   // console.log("go to work");

//}else if (today=== "thursday") {
  //  console.log("go to work");

//}else if (today=== "friday") {
  //  console.log("go to mosque");

//}else if (today=== "saturday") {
    //console.log("go to party");

//}else {console.log("please input a valid day")}

//alert (`Today is ${today}`)


//switch (today){
   // case "sunday" :
   // console.log("church")
  //  break
  //  case "monday":
  //  console.log("work")
  //  break
  //  case "tuesday":
  //  console.log("work")
 //   break
  //  case "wednesday":
  //  console.log("work")
   // break
  //  case "thurday":
  //  console.log("work")
  //  break
  //  case "friday":
  //  console.log("work")
  //  break
  //  case "saturday":
   // console.log("party")
  //  break
  //  default:
  //  console.log("enter a valid day");
//}



//let age = prompt("How old are you ?");

//if (age >= 18 ) {
   // console.log ("you are old enough to drive");
//}else  {
   // console.log(`you have ${18 - age} years left to drive `) ;
//}

//let kayname = prompt("what is your name")
//et kayage = prompt("How old are you ?");
////
//let tolage = prompt("How old are you ?");

//if ( kayage > tolage) {
  //  console.log ( ` kayage is ${kayage - tolage} years older`)
//}else if ( kayage == tolage) {
  //  console.log("age mate")
//}else {
 ////   console.log ( ` tolage is ${tolage - kayage} years older`)
//}

//A code that gives grade to students according to their scores

//let studentScore = prompt("Enter your score");

// if (studentScore >= 70 && studentScore <=100){
//     console.log("you scored an A");
// }else if (studentScore >=60 && studentScore <=69 )
// {
//     console.log("you scored an B");
// }else if (studentScore >=50 && studentScore <=59) {
//     console.log("you scored an C");
// }else if (studentScore >=45 && studentScore <=49 ) {
//     console.log("you scored an D");
// }else if (studentScore >=40 && studentScore <=44 ) {
//     console.log("you scored an E");
// }else if (studentScore <=39 ) {
//     console.log("advise to withdraw");
// }else {
//     console.log("enter a valid score");
// }


// let current = Date()
// console.log(current);

// let currentDate = new Date()
// console.log(currentDate);

// let year = currentDate.getFullYear();
// console.log(year)
// let month = currentDate.getMonth() + 1 ;
// console.log(month)

// let day = currentDate.getDay() ;
// console.log(day);

// let hour = new Date().getHours()
// console.log(hour);


// document.getElementById('lasop').innerHTML = currentDate


// if (hour <12) {
//   document.getElementById ('laso').innerHTML = "Good morning"
// }else if (hour >=12 && hour < 16) {
//   document.getElementById ('laso').innerHTML = " Good Afternoon "
// }else if (hour >=16 && hour < 20) {
//   document.getElementById ('laso').innerHTML = " Good evening "
// }else {
//   document.getElementById ('laso').innerHTML= "Good Night"
// }


// if (day == 0) {
//   document.getElementById ('las').innerHTML = "Today is sunday go to church"
// }else if (day == 1){
//   document.getElementById ('las').innerHTML = "Today is monday , go to work"
// }else if (day == 2){
//   document.getElementById ('las').innerHTML = "Today is tuesday , go to work"
// }else if (day == 3){
//   document.getElementById ('las').innerHTML = "Today is wednesday , go to work"
// }else if (day == 4){
//   document.getElementById ('las').innerHTML = "Today is thursday , go to work"
// }else if (day == 5){
//   document.getElementById ('las').innerHTML = "Today is friday , go to mosque"
// }else if (day == 6){
//   document.getElementById ('las').innerHTML = "Today is saturday9 , go to Party"
// }

//ARRAY

// let emptyArray = []
// emptyArray = [ 1,2 , 'Gabriel' , 'Timi' , 'Temitope' ]

// console.log(emptyArray[0]);
// console.log(emptyArray[3]);
// console.log(emptyArray[4]);
// console.log(emptyArray.length);

// console.log(emptyArray.includes ('Gabriel'))

// let lastIndex = emptyArray.length -1
// console.log(lastIndex)
// emptyArray[3]

// //console.log(emptyArray);
// console.log (emptyArray.pop())  //remove last item on array
// emptyArray.push('charles')      
// console.log(emptyArray);   //add a new item last on array


// console.log (emptyArray.shift())
// console.log (emptyArray.unshift())
// console.log (emptyArray.slice(0,1))
// console.log (emptyArray.slice(1))

// let arrNum = [1,2,3,4,5,6,7,8]

// let another = ["Seyi" , "Ali" , "Tony" , "Henry" , "Timi" , "Wale"]

//  another.splice(2,0, 'Gabriel' , 'Charles', 'Austin' , 'Damilola' , 'Temitope')

//  console.log(another);
//  document.getElementById('la').innerHTML = another.join (', ')

//  console.log(arrNum.concat(another));

//  console.log(another.sort())
//  document.getElementById('la1').innerHTML = another.reverse()


//  let arrSort = [10 ,2 ,1 , 11 , 31 , 3 , 20 , 22]
//  console.log(arrSort.sort(function(a,b){return b-a}));


//  let BirthdayParty = prompt("What is your name ?");
//  letfNameparty = BirthdayParty.slice(0,1).toUpperCase()
//  let oNameparty = BirthdayParty.slice.to(1,BirthdayParty.length )

//  let partyInvities = fNameparty + oNameparty


 

//  if (another.includes (partyInvities)){
//   document.getElementById('la2').innerHTML = `${partyInvities } , welcome to the party`
  
//  }else  {
//   document.getElementById('la2').innerHTML = `${partyInvities } , You're not invited`
//  }



 // a program tthat ask users to enter the no of hours they earn daily .. it will calculate how much you earn 



//  let dailyuser = prompt("How many hours do you work daily ?");


//  let hourlypay = 500 ;

// let monthlypay = (`${dailyuser * hourlypay} ` * 25 )


// if (monthlypay < 60000) {
//   console.log( `your monthly pay is ${monthlypay} , you need to earn more`);
// }else if (monthlypay >= 60000 && monthlypay <100000) {
//   console.log(`your monthly pay is ${monthlypay} , you are trying`);
// }else if (monthlypay >= 100000 && monthlypay <200000) {
//   console.log(`your monthly pay is ${monthlypay} , You are getting better `);
// }else if  (monthlypay >= 200000) {
//   console.log(`your monthly pay is ${monthlypay} , Nigeria is getting better `);
// }else {
//   console.log("enter a valid input");
// }


  let i = 0;
while(i <= 5){
  console.log(i);
  i++
  }

// let h = 0
//  do{
//   console.log(h)
// }while(h <=5)
 
// for( let i = 0 ; i<=5; i++) {
//   console.log(i);
// }

for( let i = 5 ; i>=0; i--) {
  console.log(i);
}


for( let i = 1 ; i<=100; i++) {

  if (i % 3 ==0 && i % 5 ==0){
    console.log("fizzbuzz")
  }else if (i % 3==0){
    console.log("buzz")
  }else if (i % 2 ==0){
    console.log("fizz")
  }else {
    console.log(i)
  }

}



let studentlist = ["Seyi" , "Ali" , "Tony" , "Henry" , "Timi" , "Wale"];

for (student of studentlist) {
  console.log(student.toUpperCase())
}


//write a loop that makes the following patterns in console.log

// for( let i = 0 ; i<=5; i--) {
//   console.log("#" . repeat(i));
// }

//write a program that saya 0x0 ,ix1 

// for( let i = 0 ; i<=10; i++) {
//   console.log(`${i} * ${i} = ${i * i}`);
// }

//  let  even =0;
//  let odd = 0;
//  let result = []

//  for (i=0; i<=100; i++){
//   if(i%2===0){
//     even=even+1
    
//   }else{
//    odd=odd+1
    
//   }
//  }

//  Result.push(even)
//  Result.push(odd)
//  console.log(result)


//FUNCTION

// function timi (){
//   let q = 67
//   let w = 10

//   d = q * w
//   console.log(d);

// }
// timi()

function timi (q,w){
  d = q * w
  console.log(d);
}
timi (4,9)


function add (params) {
  let sum = 20 + params
  console.log(sum)
}
add(89)

timi(4,6)



let em = []

function maloo (){
 let ran = Math.floor(Math.random()*6) + 1

 em.push(ran)
 console.log(em)
}
maloo()
maloo()
maloo()


let empEven = []
let empOdd = []
const genArr=()=>{
  let ran = Math.floor(Math.random() * 100) + 1

  if (ran % 2 === 0){
     empEven.push(ran)
  }else {
    empOdd.push(ran)
}
console.log(empEven)
console.log(empOdd)

}
genArr()
genArr()
genArr()



let newArray = [9,8.7,6,5,4,3,2,1,25,15,30,17]
console.log(newArray.sort(function(a,b){return a-b}));


let square = function(n){
  return n * n 
}
console.log(square(5))
console.log(square(8))
console.log(square(15))
console.log(square(25))






for( let i = 1 ; i<=100; i++) {

  if (i  === 1 ){
  
    console.log(` ${i} is an odd number`)

  }else if (i ===1 || i ===49 ){
    console.log(`${i} is an odd number`)
  }else if ( i ===3 || i == 5 || i===2 ){
    console.log(`${i} is a prime number `)

  }else if (i%2 !== 0 && i%3 !==0 && i%5 !==0 ){
    console.log (` ${i} is a prime number`)
  }else if (  i%2 ==0 ){
    console.log(`${i} is an even number`)
  }else  {
    console.log(`${i} is an odd number`)
  }
  


}