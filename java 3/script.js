// // prompt
// var name = prompt("enter yoou age")
// var age = 18
// if ( age == 18) {prompt("allowed")}
// // hary 
// var a = prompt("enter a here" , "20")
// a = Number.parseInt(a)
// document.write(a)
// var name = comfirm ("ali")
// if(write){document.write(age)}
// else{document.write("plese allow me")}
// prompt if else
// var password1 = prompt("Enter your password")
// var password2 = prompt("Enter your password")

// prompt("Enter your password")
// if(password1 == password2){alert("confirmed")}
// else{alert("Invalid")}
// prompt("Enter your password")
// if(password == password){alert("confirmed")}
// else{console.log("Invalid")}

// var num1 = prompt("enter your pass")
// var num2 = prompt("enter previous pass")
// if(num1===num2){alert("confirmed")}
// else{alert("Noo")}

// comparision operator chap 8
//  var a = 10;
//  var b = 10;
//  console.log( a>=b )
// if else statement

//  var num =80 ;
//  if(num >= 80 && num <=80){document.write("Exceptional");}
//  else if(num >=70 && num <=70){document.write("A grade")}
//  else if(num >=60 && num <=60){document.write("B grade")}
//  else if(num >=50 && num <=50){document.write("C grade")}
//  else if(num <33){document.write("Fail")}
//  else{alert("Please enter avalid pass")}

//data type
// nn bb ss u
// var a = null;
// var b = 222;
// var c = true;  //can also false 
// var d = bigint("88")
//ternary condition
//  var a = 12;
//  var b;
// ( a==21 )? b="True" : b="false"
//  document.write(b);

// switch case
// var day = prompt("input the day");
// switch (day) {
//     case 0:
//   document.write("Today is monday")
//         break;

//     case 1:
//         document.write("Today is tues")
  
//         break;

//     case 2:
//         document.write("Today is thurs")
  
//     break;

//     case 3:
//         document.write("Today is friday")
  
//     break;

//     case 4:
//         document.write("Today is sat")
//         break;

//     case 5:
//         document.write("Today is sunday")
//         break;

//     case 6:
//         document.write("Today is monday")
//         break;
//     default: 
// document.write("enter a valid");}

//if else
// var num = prompt("input the num")
// var num1 = prompt("add table")
// var reminder = num%num1;
// if(reminder==0){document.write(num+"is divided by"+num1)}
// else{document.write(num+"is not divided by"+num1)}

// array (use to store a multiple value in single variable)
//  var marks [ 12,56,32,56 ]
//  console.log(marks[0])
//  console.log(marks[1])
//  console.log(marks[2])
//  console.log(marks[3])
//  console.log(marks[4])

//index (variable kia naam kai bad [ ] aye ga)
//length
// show single value
// methods
//update single value


// var cities = [ "karachi" , " lahore" , "islamabad" , "kpk"]  
// //console.log(cities.length) to find legth
// console.log(cities[0]);
// document.write(cities[0] + " is the largest city<br>")
// document.write(cities[1] + " is the smaller city<br>")
// document.write(cities[2] + " is the small city<br>")
// document.write(cities[3] + " is the smalles city<br>")
// console.log(cities[cities.length-1 ])
// //update single value
// cities[0] = "karachi is the city of the light"
// console.log(cities);
// //method to use updation
// //push//pop//shift//unshift
// cities.push("Pehsawar" , "sawat" , "Queeta")
// console.log("cities after push-->" , cities)
// cities.pop()
// console.log("console after push" , cities)
// cities.shift()
// console.log(cities)




// var vowel = [ "a" , "e" ,"i" ,"o" , "u"]
// console.log(vowel)
// vowel.pop()
// console.log(vowel)

// cities.length = 0;
// console.log(cities);


// //splice ( to add or remove in bw of variable)
// var friuts = ["apple" , "banana" , "watermealon" , "grape"]
// //splice adding
// friuts.splice(3 , 0 , ",mealon");
// console.log(friuts)

// //slice(use for copy elemet)
// var friuts = [ "Apple", "mango","grape","watermealon","mealon","guava"]
// var copy = friuts.slice(1 , 3)
// console.log("copy using slice" , copy);
// console.log(friuts);



// var brands = ["nikki" , " addidas" , "addibas" , "cola" , "pepsi" , "dew"]
// console.log(brands.pop)
// brands.push("Peshawar", "Swat", "Quetta", "Kashmir");
// console.log("cities after push-->", brands);

//simple loop
// for (var i = 1; i <= 10; i++) {
//   console.log("Tooba Pagal " + i);
// }

//print from 1 to 100
//for (var i = 1; i <= 100; i++) {
  //console.log(i);
//}
// loop
//1.variable banate hen
//2.condition
//3.increment ya decrement

//simple loop
// for (var i = 1; i <= 10; i++) {
//   console.log("Hello " + i);
// }

//print from 1 to 100
// for (var i = 1; i <= 100; i++) {
//   console.log(i);
// }

//print square from 1 to 10
// for (var i = 1; i <= 10; i++) {
//   console.log(i * i);
// }

//print square msg from 1 to 10
// for (var i = 1; i <= 10; i++) {
//   console.log("Square of " + i + " is " + i * i);
// }

//print even numbers only
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// // print odd numbers only
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// //print table of 4 from 1 to 10
// for (var i = 1; i <= 10; i++) {
//   console.log(i * 4);
// }

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
//  var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
//  var fullNames = [];
//  for (var i = 0; i < firstNames.length; i++) {
 //  for (var j = 0; j < lastNames.length; j++) {
//  fullNames.push(firstNames[i] + lastNames[j])
// console.log(lastNames)}};


//1.variable banate hen
//2.condition
//3.increment ya decrement

// simple loop
// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

//print from 1 to 100
// for (var i = 1; i <= 100; i++) {
//   console.log(i);
// }

//print square from 1 to 10
// for (var i = 1; i <= 10; i++) {
//   console.log(i * i);
// }

//print square msg from 1 to 10
// for (var i = 1; i <= 10; i++) {
//   console.log("Square of " + i + " is " + i * i);
// }

//print even numbers only
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

//print odd numbers only
// for (var i = 1; i <= 20; i++) {
//   if (i % 2 == 1) {
//     console.log(i);
//   }
// }

//print table of 4 from 1 to 10
// for (var i = 1; i <= 10; i++) {
//   console.log(i * 4);
// }

//
// var num = 0;
// 1 3 6 10 15 21 28 36 45
// for (var i = 0; i < 10; i++) {
//   console.log("num=>", num, "i=>", i);
//   num = num + i;
//   console.log(num);
// }

//9,8,7,6,5,4,3,2,1
// for (var i = 0; i < 10; i++) {
//   console.log(9 - i);
// }

//19, 28, 37, 46, 55, 64, 73, 82, 91;
// for (var i = 1; i < 10; i++) {
//   console.log(i, 10 - i);
// }

//
// var nums = [20, 3, 12, 34, 21, 25, 6, 2];
// var largestNum = 0;
// for (var i = 0; i < nums.length; i++) {
//   console.log(
//     "index->",
//     i,
//     "arr value=>",
//     nums[i],
//     "largest number=>",
//     largestNum,
//     "condition=>",
//     nums[i] > largestNum
//   );
//   if (nums[i] > largestNum) {
//     largestNum = nums[i];
//   }
// }
// console.log("Largest number is-> ", largestNum); 
 
 
var nums = [ 1, 2, 3, 4,5, 6, 7, ,9 ,0 ,]
var input = prompt("input the num") 
if (input == nums){document.write("valid")}
else{ document.write("invalid")}
for (var i = 0 ; i<9; i++){console.log("valid")}