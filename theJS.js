

/*var nameEx=['Himanshu','Roy','Hope','Ops Bird'];


for(let elements in nameEx){
    console.log(elements);
}

for(let elements of nameEx){

    console.log(elements);
}

nameEx.forEach(function(elements,index,array){

console.log(`${elements} index is ${index}  Arrays ${array}`);

//console.log(index);


//console.log(array);

});


nameEx.forEach((elements,index,array)=>{

    console.log(`${elements} index is ${index}  Arrays ${array}`);

}
);*/

//var nameEx=['Himanshu','Roy','Hope','Ops Bird'];

//traversel in array
//search and filter in array
//sort and compare


//curd 
//Map(),Reduce(),Filter()

//nameEx.push('Hawks');//push returs length of array
//console.log(nameEx);

//const count=nameEx.push('Hawks');
//console.log(count);

//nameEx.push('kk','test1','test2');

//console.log(nameEx);



//unshift() adds data in beginning + Gives length

//nameEx.unshift('ops');
//console.log(nameEx);

//nameEx.unshift('hhh','sjsjs','kkkkk','alskjdfhghdjskalkdj');
//console.log(nameEx);

//const myNumbers=[1,2,3,5];
//console.log(myNumbers.unshift(4,6));
//console.log(myNumbers);

//const plants=['pea','tomato','cabbage','potato'];

//pop() removes last element and returns that element + changes the length of original array
//console.log(plants);
//console.log(plants.pop());
//console.log(plants);

 


// shift() opposite of unshift() ; removes element from first

//console.log(plants.shift());
//console.log(plants);









//splice() Adds or remove elements elements from an array

//1. Add Dec at the end.
//2. what is return value of splice method
//3. update march to March(update)
//4. delete June from array

           //const months=['Jan','march','April','June','July'];
 

//sol:1

//  const newMonths=months.splice(months.length,0,'Dec'); //months.splice(5,0,'Dec')
//console.log(months);


//sol:2

//console.log(newMonths);


// sol:3


/*const indexOfMonth=months.indexOf('march');

if(indexOfMonth!=-1){
    const updateMonths=months.splice(indexOfMonth,1,'March');//months.splice(1,1,'March')

}else{

    console.log('No Data Found');
}






console.log(months);*/







//sol:4

//const indexOfMonth=months.indexOf('June');

//if(indexOfMonth!=-1){
  //  const updateMonths=months.splice(indexOfMonth,1);//months.splice(1,1,'March')
    //console.log(updateMonths);
//}else{

  //  console.log('No Data Found');
//}



//console.log(months);


 //to delete all data after a point
 
/* const indexOfMonth1=months.indexOf('April');

 if(indexOfMonth1!=-1){
    const updateMonths=months.splice(indexOfMonth1,Infinity);
console.log(updateMonths);

}
console.log(months);*/





// const array1=[1,4,9,16,25];

// let newArr=array1.map((currentElement,index,arr)=>{

// return currentElement>9;

// })

// console.log(array1);
// console.log(newArr);


// let newAr=array1.map((currentElement,index,arr)=>{
// //map() returns new array without mutating original array
// return  `Index No. ${index} Value: ${currentElement} belong to ${arr} `;

// });

// // let newArfor=array1.forEach((currentElement,index,arr)=>{
// //     //foEach() returns  mutated original array
// //     return  `Index No. ${index} Value: ${currentElement} belong to ${arr} `;
    
// //     });

// console.log(newArfor);


//Que find square root of each element 

// let arr=[25,36,49,64,81];
// let arrSq=arr.map((customElements)=>{

// return Math.sqrt(customElements);

// });

//or 
// 


//que: Multiply each element by 2 and return greater than 10

//let arr=[2,3,4,6,8];


// let arr2=arr.map((customElements)=>{

//     return customElements*2;
// }).filter((customElements)=>{

//     return customElements>10;
// })

// console.log(arr2);

//or 

// let arr2=arr.map((customElement)=>customElement*2).filter((customElement)=>customElement>10);
// console.log(arr2);



// reduce method()
// flatten an array means to convert the 3D ,2D array into a single dimensional array

// The reduce() method executes a reducer function(that you provide) on each element of the array,
// resulting in single output value .The

// Reducer function takes four arguments

// Accumulator
// Current value
// Current index
// Source Uint32Array
 
// let arr3=[5,6,2];
// let sum=arr3.reduce((accumulator,currEle,index,arr)=>{
 
// //arr3.reduce((accumulator,currEle)) can also be used
//     return accumulator+=currEle;
// })

// console.log(sum);



// 





//String in javascript


//et myName='Himanshu Kumar Singh';
// let myNam="Himansshu Kumar Singh";

// let string=new String('Himanshu Kumar Singh');//String constructor

// console.log(myName);
// console.log(string);



//console.log(myName.length);






// Escape Sequence 

// /'=>'
// /"=>"
// //=>/

// const anySentence="We are \" Vikings\" from north";
// console.log(anySentence);

// or use alternative quotes

// 






//find string in string

//indexOf()  returns first occurence of specified string ,case sensitive starts from 0

// const mySelf='I Am Himanshu Kumar Singh';
//console.log(mySelf.indexOf('Am'));//or indexOf('A);

// console.log(mySelf.indexOf('m',8));// starts from 8







//  lastIndexOf()
//returns the index within the calling String object of the last occurence of someValue
//or -1 if not found search from back



 

// const mySelf='I Am Himanshu Kumar Singh';
// console.log(mySelf.lastIndexOf('K'));

// const myData='I am the thapa Technical';
// console.log(myData.lastIndexOf('t',6));








//search string in string
//search()  search for specified value and return position of the match does not take second argument


// const myData='I am the thapa Technical';
// let sData=myData.search('thapa');//case sensitive
// console.log(sData);












//Extracting string part

//slice(start,end)
//substring(start,end)
//substr(start,length)



//slice() extracts part of string and returns extracted partin a new string
//parameters start position and end position(end not included)
// the original array does not change
//var str='Apple, Bananaa, Kiwi';
//let res=str.slice(0,4);
//let res=str.slice(7,-2);//go from 7 to last then remove last 2 
// let res=str.slice(7);//from7 to last
// console.log(res);

//Que: Display only 280 characters of a string like the one used inTwitter

// let myTweets='Loendbfvbdfhdjkdfjh jdjd jj jdd dj djjjjjjjjjjjjjjjjjjjj s lvskfdbks k kshgurhigw ughekavsjdbo oeoueruhgorho hhhhhhhhhhhhhhhhhhhhhhhhh h  ooooooooooooooooooooooooooooooooo';
// let myActualTweets=myTweets.slice(0,280);
// console.log(myActualTweets);
// console.log(myActualTweets.length);








//substring() similar to slice
//Difference is substring() cannot accept negative indices
// if negative given thencharacters are counted from 0 position
// does not count last index

// var str='Apple, Bananaa, Kiwi'; 
// let res=str.substring(0,4);
// console.log(res);











//substr() similar to slice
//difference is second parameter specifies the length of the extracted part

//var str='Apple, Bananaa, Kiwi'; 
//let res=str.substr(0,4);
//let res=str.substr(7,-2);//no output
// let res=str.substr(-10);

// console.log(res);








//replace() replaces specified value with another value in a string
//replace(searchFor,replaceWith)


// let myBioData='I am vinod bahadur thapa vinod';
// let repData=myBioData.replace('vinod','Vinod');
// console.log(repData);
// console.log(myBioData);

//Points to rembember in replace
//1:Replace method does not change string it is called on.It returns a new String
//2:By default, the replace() method replaces only the first match
//3:By default replace() is case-sensitive 
//Writing Vinod in Upper Case will not Work






//There are 3 methods to extract characters from a string
//1: charAt(position)
//2: charCodeAt(position)
//3: Property access []



//charAt()

// let str='HELLO WORLD';

// console.log(str.charAt(0));


//chaeCodeAt() 
//returns unicode of the value at sprcified index returns UTF-16 code
// Integer between(0 and 65535)

// var str='Hello World';

// console.log(str.charCodeAt(0));


//Que: unicode of last character in a string
// let str='Hello World';
// console.log(str.charCodeAt(str.length-1));





//Property Access
// ECMAScript 5 Allows property access [] on strings

// var str='HELLO STRING';

// console.log(str[0]);






//other useful methods
// toUpperCase()
// toLowerCase()
//concat()

// let fname='Himanshu';
// let sname='Kumar';
// console.log(fname.concat(" "+sname));




//trim()

// var str='     Hello World     ';
// console.log(str.trim());






//convert string to array
//split() converts string to array

// var txt='a,b,c,d,e';               //String
// console.log(txt.split(','));       //Split on Commas

// var txt='a b c d e';
// console.log(txt.split(' '));       //Split on spaces

// var txt='a,b|c,d,e';
// console.log(txt.split('|'));      //Split on pipe









//Date and Time in JS
// Date methods (get and set)
//Time methods (get and set)


//Javascript Date objects represent a single moment in time in a platform independent format 
//Date objects contain a number that represents milliseconds since 1 January 1970 UTC


//there are 4 ways to create Date Objects
// new Date()
// new Date(year,month,day,hours,minutes,seconds,milliseconds) // it takes 7 arguments
//new Date(milliseconds)
// we cannot avoid month section
//new Date(date string)








//new Date()
//Date objexts are created with the new Date() constructor


// let currDate=new Date();
// console.log(currDate); //in GMT o/p->2023-01-20T11:14:04.374Z run in browser also
// console.log(new Date());
//console.log(new Date().toLocaleString());//20/1/2023, 4:48:36 pm
//console.log(new Date().toString());//Fri Jan 20 2023 16:49:16 GMT+0530 (India Standard Time)








//Date.now() Returns the numeric value corresponding to the current time -the number of milliseconds
//ellapsed since January  1, 1970  00:00:00 UTC

//console.log(Date.now());   // o/p=> 1674213752375







//  new Date(year, month,....)
// 7 numbers specify year,month,day,hour,minute,second and millisecond
// Note: JavaScript counts months from 0 to 11
// January is 0 and December is 11


// var d=new Date(2023,0,19,10,33,30,0);
// console.log(d.toLocaleString());



//Date methods

 //const currDate=new Date();

// //How to get individual data
// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getDay());


//How to set individual date


// console.log(currDate.setFullYear(2022));

// // The setFullYear() can optionally set month and day
// console.log(currDate.setFullYear(2022,10,5)); 
// console.log(currDate.setMonth(10));//0-11 jan -dec
// console.log(currDate.setDate(5));
// console.log(currDate.toLocaleString());










//Time Method 
//Time get methods

// const currTime=new Date();
// console.log(currTime.getTime());//returns time elapsed from 1 jan 1970 in milliseconds

// console.log(currTime.getHours());// returns hours of a date as number
// console.log(currTime.getMinutes());
// console.log(currTime.getSeconds());
// console.log(currTime.getMilliseconds());






//Time set methods

// const currTime=new Date();
// //console.log(currTime.setTime());
// console.log(currTime.setHours(5));
// console.log(currTime.setMinutes(5));
// console.log(currTime.setSeconds(5));
// console.log(currTime.setMilliseconds(5));










//Practice Time
// new Date().toLocaleTimeString();// 11:18:48 AM
// new Date().toLocaleDateString();// 11/16/2015
// new Date().toLocaleString();// 11/16/2015 , 11:18:48 AM












// Math Object in JavaScript

//console.log(Math.PI);


//Math.round() round off to nearest Integer

// let num=10.2437;
// console.log(Math.round(num));


//Math.pow()
//console.log(Math.pow(2,3));// or we can use (2**3)


//Math.sqrt()
//console.log(Math.sqrt(25));



//Math.abs() returns absolute(positive value) of given number
// console.log(Math.abs(-55));
// console.log(Math.abs(-55.66));
// console.log(Math.abs(-995));



//Math.ceil() returns value of x rounded upto its nearest integer 
// console.log(Math.ceil(4.61));
// console.log(Math.ceil(99.1));



//Math.floor() returns value of x rounded down to its nearest integer
// console.log(Math.floor(4.7));
// console.log(Math.floor(99.1));



//Math.min()
//console.log(Math.min(0,150,30,20,-8,-200));


//Math.max()
//console.log(Math.Max(0,150,30,20,-8,-200));



//Math.random() return random number between 0(inclusive) and 1(exclusive)
//console.log(Math.random()*10);//0 to 9

//Math.trunc() returns integer part of a number
// console.log(Math.trunc(4.6));
// console.log(Math.trunc(-99.1));


 //Document Object Model in JavaScript

 //Window is the main Character or we Can say the global Object and any operations related to entire 
 // browser window can be a part of window object

 //ex: the history or to find the url
                                                          //Bom=>Browser Object Model
 //Whereas Dom is child of window object

//Dom vs Bom

// DOM is Document Object Model,which deals with the document ,the HTML elements themselves,eg document and
// all traversal you would do in it ,events etc

//For  ex:
// changing backround color
//document.body.style.backround="red"



//The BOM is Browser Object Model ,which deals with browser components aside from the document ,like
//history ,location,navigator and screen(as well as some other which vary from browser to browser)
//In simple meaning all the windows operations which comes under BOM are performed using BOM






//DOM navigation 

//Navigation through DOM
//1: document.documentElement 
//returns element that is the root element of the document
//2: document.head
//3: document.body
//4: document.body.childNodes  (include Tab, enter and whitespace)
 //list of direct children only
 //5: document.children  (without text nodes, only regular Elements)
 //6: document.childNodes.length

 //Que: How to check wheather an element has child nodes or not ?
 // Ans: use hasChildNodes()


 //Que: How to find a child in a Dom tree
 // firstChild , firstElementChild, lastChild ,lastElementChild




 //How to search the Element and the References=> time Stamp: 9.23.0 to 9.40.24
 
 
 //Events in java script

 //HTML  events are "things" that happen to HTML elements
 //when javascript is used in HTML pages ,JavaScript can "react" on these events.
 
 
 //HTML events
 //An HTML event can be something the browser does ,or something a user does.

//Examples of HTML events 
//an html page has finished loading
//an html input field was changed 
// an html button was clicked 
//Often ,when events happen ,you may want to do somethings

//Javascript lets you execute code when events are detected
//HTML allows event handler attributes, with Javascript code ,to be added to html element



//4 ways to write events in javascript
//a: using inline events alert();
//b: by calling a function
//c: using Inline events(HTML onclick="" property and element.onclick)
//d: using event listeners (addEventListener and IE's attachEvent) //9.45.47


//what is event object
//Event object is parent object of the event object
//example: MouseEvent ,focusEvent,KeyboardEvent etc




//MouseEvent in javasript //10.06.44
//The MouseEvent Object 
//Events that occur whne mouse interacts with Html
//document belong to mouse event object


//Keyboard Event in javascript //10.12.10
//Events that occur when user presses a key on the keyboard ,belongs to KeyboardEvent Object
//refer w3 schools



//InputEvents in javascript 
//The on change event that occurs when the value of an element has been changed

//for radiobuttons and checkboxes ,the onchange event occurs when the checked state has been changed



//1:setTimeout()
//2:setInterval()
//3:clearTimeout()
//4:clearInterval()


//OOPs in javaScript

//What is object Literal
//Object Literal is simply a key:value pair data structure

//Storing variables and functions together in one container,we can refer this as object



//How to create object


//1st way
// let bioData={
// myName :'Himanshu Kumar Singh',
// age :21 ,
// //Adding function


// getData : function(){
//     console.log(`My Name is ${bioData.myName} with  Age  ${bioData.age}`);
// } 
// }

//console.log(bioData.myName);

//How to call function
//console.log(bioData.getData());
//or
//bioData.getData()

  //2nd Way


// let bioData={
// myName :'Himanshu Kumar Singh',
// age :21 ,
// //Adding function


// getData(){
//     console.log(`My Name is ${bioData.myName} with  Age  ${bioData.age}`);
// } 
// }



//What if we want object as a value inside an object

// let bioData={
// myName :{
// realName : 'Himanshu',
// petName:'to4ot'
// },
// age :21 ,

// getData(){
//     console.log(`My Name is ${bioData.myName} with  Age  ${bioData.age}`);
// } 
// }
// console.log(bioData.myName.realName);



//Waht is this object
 //The definition of "this" object is that it contain the current context.
 //the this object can have different values depending on where it is placed.


 //example 1
 // console.log(this);


 //example 2
//  function myName(){
// console.log(this);
//  }
//  myName();



//example 3 //run in browser
// var myNames='Himanshu Kumar Singh';
// function myName(){
//     console.log(this.myNames);
// }
// myName();



//example 4
// const obj={
// myAge : 21,
// myName(){

//     console.log(this.myAge);
// }
// }
// obj.myName();



//example 5 this will not work with arrow function


// const obj={
// myAge : 21,
// myName:()=>{

//     console.log(this.myAge);
// }
// }
// obj.myName();


//Destructuring in ES6
//The Destructuring assignment syntax is a javascript expression that makes it possible to unpack values 
//from arrays, or properties from objects ,into distinct variables

//Array Destructuring 
//const myBioData=['vinod','thapa',26];

// //Traditional way
//// let myFName= myBioData[0];
//// let myLName= myBioData[1];
//// let myAge= myBioData[2];

// console.log(myAge);
   //Destructuring
//let[myFName,myLName,myAge ]=myBioData;

//let[myFName,myLName,myAge,myDegree='B.tech']=myBioData;//how to add extra data




//object destructuring
// const myBioData={
// myFName :'vinod',
// myLName : 'thapa',
// myAge : 26
// }

//   //Traditional
// //let age=myBioData.age;
// //let myFName=myBioData.myFName;
// //console.log(age); 


//   //Destructuring
//   let{myFName,myLName,myAge,myDegree='B.Tech'}=myBioData;
//   console.log(age); 



//Object Properties

// we can add dynamic properties 

// let myName='vinod';    //Time stamp 11.28.40
// const myBio={
//   [myName] :'hello how are you', //[] used to add dynamic value without [] myName will hold 'hello how are you'
//   26 :'Is My Age' //in [] we perform addition 20+6
// }

// console.log(myBio);




//no need to write key and value ,if both are same

// let myName='vinod thapa';
// let myAge=26;

// const myBio={
//   myName,
//   myAge                                 // myName:myName,
//                                   // myAge:myAge 
// }
// console.log(myBio);




//Spread Operator "..."

// const colors=['red','green','blue','white'];
// const myColors=['red','green','blue','white','yellow','black'];//traditional 

// // // 2nd time add one more color on top and tell we need to write it again on myColors array to.



// const myFavColors=['yellow','black',...colors];//Spread operator used"..." three dots
// console.log(myFavColors);



//ES7  Features
//1: array include

          // const colors=['red','green','blue','white','pink'];
          //  const isPresent =colors.includes('red');
          //  console.log(isPresent);

          //2: Exponential operator "**"
          //console.log(2**3);



          //ES8 Features 
          //1: String Padding
          //2: Object.values()
          //3: Object.entries()

          // const message='My Name is Himanshu Kumar Singh';
          // console.log(message);
          // console.log(message.padStart(5));
          // console.log(message.padEnd(7)); //refer 11.42.05


          // const person={name:'Fred',age:87};
          // console.log(Object.values(person));
          // console.log(Object.entries(person));


          //search internet for "rest" properties



          //Es2018
          // const person={name:'Fred',age:87};
          // const sPerson={...person};//Suppose both have same values 
 
          // console.log(person);
          // console.log(sPerson);



//  see  11.51.15 to 11.56.44 for flat in array and more  

//ES2020
//1: BigInt
   
//  let oldNum= Number.MAX_SAFE_INTEGER;
//  console.log(oldNum);
//  console.log(9007199254740991n+12n);  //12.01.12

//  const newNum=9007199254740991n+12n;
//  console.log(typeof newNum);

//??=> nullish coalescing //12.04.07


//Es2014 =>"use strict"
// "use strict";
// let x=3.14;
// console.log(x);





//Event Propogation //12.11.20
//Event Propogation mode determines in which order the elements receive the event 



//Event Capturing =>with event capturing ,the event is first captured by the outmost element and 
//propogated to the inner elements
 
//Capturing is also called "trickling" which helps remember the the propogation order 



//higher order function
 
// const add=(a,b)=>{
//   return a+b;
// }

// const calculator=(num1,num2,operator)=>{
//   return operator(num1,num2);
// }// calculator is higher order function

// calculator(5,2,add);
// console.log(calculator(5,2,add));// add is callback function



//Hoisting in javascript 
// we have creation and execution phase 
//Hoisting in javascript is a mechanism where variables and functions 
//declarations are moved to the top of their scope before the code 

//example 
// console.log(myName);
// var myName;
// myName='Himanshu';

//How it will be in output during creation phase

// var myName;//myName is assigned undefined
// console.log(myName);
// myName='Himanshu';

//In Es6 ,hoisting is avoided by using the let keyword instead of var.(the other difference is that 
// variables declared with let are local to the surrounding block, not the entire function)



//What is Scope Chain and Lexical Scoping in javascript?
//Scope Chain is used to resolve the value of variale names in Js.
//scope chain in js is lexically defined ,ehich means that we can see what the scope chain will be by
//looking at the code 

//At th top we have the global scope ,which is the window Object in the browser

//Lexical Scoping means Now, the inner function can get access to their parent functions variables but 
//the vice versa is not true 

//Example

// let a="Hello World"; //Global Scope

// const first=()=>{
// let b="How are You";

// const  second =()=>{

//   let c="Hi, I am Fine thank u";
//   console.log(a+b+c);
// }

// second();
// //console.log(a+b+c); // c can't be used
// }
// first();


//What is Closures in Js
//A closure is a combination of function bundled together (enclosed) with references to it's surroundings
//state (the lexical enviroment).
//In other words, a closure gives you access to an outer function's scope from an inner function 

//In jS closures are created every time a function is created ,at function creation time.


// example:
//It is ame as lexical scoping 
// const outerFunc=(a)=>{
// let b=10;

// const innerFunc=()=>{

//   let sum =a+b;
//   console.log(`Sum of two number is ${sum}`);
// }

// innerFunc();
// }


//Event Loop

//Function currying //13.15.18

//Currying is a technique of evaluating function with multiple agguments,into sequence of function with single argument


// function sum(num1){
//   //console.log(num1);
//   return function(num2){
//     //console.log(num2);
//    return function(num3){

//     console.log(num1,num2,num3);
//    }
//   }


// }

// sum(5)(3)(8);

//or

// const sum =(num1)=> (num2)=>(num3)=>console.log(num1,num2,num3);

// sum(5)(3)(8);



//CallBack Hell 13.24.10



//Json 13.45

//13.50 see code on  how to  include css and js



//Promises


    const data=()=>{
    const setHeader=
    
    fetch('https://api.coinpaprika.com/v1/tickers',setHeader).then((res)=>{
  console.log(res.json());
    }).catch((error)=>{

      console.log(errror);
    }
    
    )

  }