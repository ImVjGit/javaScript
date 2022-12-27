//************************************************************************* */
// value and variable 
//************************************************************************* */
//1 example  
var username = 'xyz';
console.log(username);

//************************************************************************* */
//2 Naming vairable type 
//************************************************************************* */
var _myname = "abc";
var myname = "ram";
var $myname = "ram";
//************************************************************************* */
//3 datatype
//************************************************************************* */    
//1 six type of datatype

undefined
//ex
var notmention;
Boolean
//ex
var Iamboy = true;

Number
//ex 
var usernumber = 15;

String
//ex 
var uName = "Ram";

BigInt //big number we can't handle 
Symbol
//************************************************************************* */     
//extra 
///typeof (its method ) 
//************************************************************************* */     
var userAge = 52;
console.log(userAge);
console.log(typeof (userAge));//its give which type of data
// try below code( )
console.log("Try code  - Interview Question");
console.log(10 + "20");//join both string 
console.log(9 - "5");//sub number(bug in js ) 
console.log("java" + "script"); //add both string 
console.log(" " + " ");// add both 
console.log(" " + 0);    //add both string 
console.log("xyz" - "abc"); //error( 1st bug in js(Not a number output(NaN)) )
console.log(true + false);  //its give 1 value 
console.log(false + true); //its give 1 value
console.log(false + false);//its give 0 value
console.log(true + true); //its give 2 value
//************************************************************************ */
//interviw Question
//diff bet null and undefined
//************************************************************ */
var iamnull = null;
console.log(iamnull);
var notmention; //  its undefined(bcz we did not assign value )
console.log(notmention);
//2nd bug in javaScript
console.log(typeof (notmention));
//************************************************************************* */
//interview Question 
//what is NaN?(not a number )
//************************************************************************* */
// its global object
//use 
//its method in js we can check its vaue is int or not 
///nan is method we can check is number or not 
//ex
var mob = 45678913;
var nkey = "ram";
console.log(isNaN(mob)); //its give true or false 
console.log(isNaN(nkey));//its give true or false 
//************************************************************************** */
//try code
//************************************************************************** */
console.log(" NaN Try ")
console.log(NaN == NaN); //fasle
console.log(Number.NaN == NaN); //fasle
console.log(isNaN(NaN)); //true
console.log(isNaN(Number.NaN)); //true
console.log(Number.isNaN(NaN)); //true


//************************************************************************** */
// Expression and Operators
//************************************************************************** */
// + - / * =  operator 
// int value is operand 
// combination  of both is know as Expression
//six type  
//************************************************************************ */
//type : 1 assignment op (we assign the value to variable using = symobl)
//ex
var numberBelowTen = 5;
var numberAboveTen = 5;
console.log("validation : " + numberAboveTen == numberBelowTen); //its give bug (ans must be True but it give false )
console.log(numberAboveTen == numberBelowTen);//output : true 
//************************************************************************ */
//type : 2 Arithmatic op ( + - * / == )
//ex
console.log("Arithmatic : demo ");
console.log(5 + 5);
console.log(12 - 2);
console.log(5 * 5);
console.log(10 / 2);
console.log(18 % 2); //give remainder
//************************************************************************ */
//note : postfix and prefix 
//1 Increment(++) 
// postfix ex : a++ value add after )
//prefix   ex : ++a value add befor )
//2 Decrement(--)(same as above but here value not added its remove by 1 )
//************************************************************************ */
//************************************************************************ */
//type : 3  Comparison(its compar the operands and return logical value(like true or false))
//== != > < >= <= 
//ex 
var numValueOne = 10;
var numValueTwo = 50;
console.log("Comparison Demo ");
console.log(numValueOne == numValueTwo);
console.log(numValueOne = !numValueTwo);
console.log(numValueOne >= numValueTwo);
console.log(numValueOne <= numValueTwo);
console.log(numValueOne > numValueTwo);
console.log(numValueOne < numValueTwo);
//************************************************************************ */
//type : 4  Logical(its return bollean value )
//type 1 && (and)
// use: If both Condition must be true its give true value 
//type 2 !! (or) 
// use: If one Condition must be true its give false value  
//ex 

var aa = 15;
var bb = 45;
var cc = 100;
console.log(aa > bb && aa > cc);
console.log(aa > bb || aa > cc);
console.log(!(aa > bb || aa > cc));
//************************************************************************ */
//type : 5  String (concatenation)
//ex

var uname = "Ram ";
var sname = "patil";
console.log(uname + sname);
//*********************************************************************** */
//try 
console.log(3 ** 3); //two time * 
console.log(5 ** 2);//5 *5
console.log(username + 15);
//swap 
var oneN = 15;
var twoN = 100;
var temp;
console.log("old Value ");
console.log(oneN);
console.log(twoN);
temp = oneN;
oneN = twoN;
oneN = temp;
console.log("new  Value ");
console.log(oneN);
console.log(twoN);
console.log();
console.log("only two variable ");
x = 100;
y = 150;
console.log("old  Value ");
console.log(x);
console.log(y);

x = x + y;
y = x - y
x = x - y;
console.log("new  Value ");
console.log(x);
console.log(y);


//************************************************************************ */
//type : 6 Conditional (ternary)
//in js only ternary op is takes three operands
//ex : 
var age = 19;
;
console.log((age > 18) ? "you can Vote" : "you cant vote ");
//****************************************************************** */



//----------------------------------------------------------------------------------------------------------------
//difference bet  == and === ?
//ans: == use its doesnot check type
//=== :its check which type of datatype
var numx = 10;
var numy = '10';
console.log(numx == numy);
console.log(typeof (numy));
console.log(typeof (numx));


//----------------------------------------------------------------------------------------------------------------

//************************************************************************************* */
//Control Statement and Loops
//1 if else
//2 switch 
//3 while
//4 do-while
//5 for-loop
//6 for-in loop
//7 for of loop 
//8 condition op 
//
//if else
var a = 20;

if (a == 20) {
    console.log(true);
}
else {
    console.log(false);
}

var gender = "male";
if (gender == "male") {
    console.log("yes");
}
else {
    console.log("no");
}
//***************************************** */
//what is truthy and falsy values in js ?
// 0, "",undefined,null,NaN;False** is falsy value (its alway show the else part )

//2 switch
var area = "circle";
var pi = 3.14, l = 5; b = 4, r = 3;
switch (area) {
    case 'circle':
        console.log("the area of the circle is : " + pi * r ** 2);
        break;

    case "triangle":
        console.log("the area of the Triangle is : " + (l * b / 2));
        break;
    case "rectagle":
        console.log("the area of the circle is : " + (l * b));
        break;
    default:
        console.log("Enter valid data");
        break;
}

//while
var num = 10;
while (num <= 10) {
    console.log(num);
    num++;
}

//do while 
do {
    console.log(num);
} while (num <= 10);

//for loo) 
for (var i = 0; i < num; i++) {
    console.log(i);
}
//try
for (var i = 0; i <= 10; i++) {
    console.log(8 * i);
}

//********************************************************************************************* */
//function 
function sum() {
    var a = 10; b = 20;
    var add = a + b;
    console.log(add);
}
//calling function
sum();


//function with para
function multi(f, g) {
    var m = f * g;
    console.log(m);
}
var x = 10; y = 50;
multi(x, y)

//function expression directly call  
var funmulti = multi(5, 50);
funmulti;

//functional with return or expression
function sub(xx, yy) {
    return xx - yy;
}

var oo = sub(15, 2);
console.log(oo);

// anonymous function expression
var divExp = function (a, b) {
    return b / a;
}

var divR = divExp(5, 50);
console.log(divR);

///*********************************************************************************************************** */
//--------------------------------------------------------------------------------------------------------------
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//                                                   ECMA Script
//************************************************************************************************************ */
//let vs const vs var
//var use for function scope
//let and const use for block scope 
//const variable we cant change 

function bio() {

    var nameUser = "Ram";
    let Sname = "Paitl";

    console.log(nameUser);
    console.log(Sname);
    function edu() {
        let age = 15;
        console.log(Sname);
        console.log(age);
    }
    console.log(age);
}
console.log(age);
//*************************************************************************** */

//template literals(templet String )

for (let num = 1; num <= 10; num++) {
    let tb = 12;
    console.log(`${tb} * ${num} = ${tb * num}`);
}

//*************************************************************************** */

//default parameters
function multipl(a, b = 5) {
    return a * b;
}

console.log(multipl(5));

// fat arror function
//normal 
function add() {
    let aaaaa = 10; bbbbb = 20;
    let sumis = aaaaa + bbbbb;
    return `the sum of two number is ${sumis}`;
}
console.log(add());
//using fat arrow
const sumans = () => {
    let aaaaa = 15; bbbbb = 20;
    let sumis = aaaaa + bbbbb;
    return `the sum of two number is ${sumis}`;
}
console.log(sumans());


const sumdirect = () => {
    let aaaaa = 15; bbbbb = 20;
    console.log(`the sum of two number is ${(x = 10) + (y = 10)}`);
    console.log(`the multi of two number is ${11 * 11}`);
    return `the sum of two number is ${aaaaa * bbbbb}`;


}
console.log(sumdirect());

//best way to mention fat arrow

const valuefun = () => {
    `sum of two number is: ${(5 * 5)}`;
}
console.log(valuefun());

//************************************************************************************************************** */
//Array 
//************************************ */
//normal data
var f1 = 'ram';
var f2 = 'yz';
var f3 = 'tani';
//with array  
var allList = ['onka', 'unika', 'sanika', 'ravi'];
//we can store all type datatype
var allData = [15, 'janaki', 456, 'city'];
//type to define
//1
// var ownarray = new ownarray;
//**************************************************************************************************** */
//2 traversal in array

var ownarray = ['onka', 'unika', 'sanika', 'ravi'];
console.log(ownarray[0]);
console.log(ownarray[2]);
console.log(ownarray[3]);
//check the length of data
console.log(ownarray.length);

//for loop 
for (var i = 0; i < ownarray.length; i++) {
    console.log(ownarray[i]);
}


//adv for loop
for (let elements in ownarray) {
    console.log(elements);//its give index 
}

//get data using for 
for (let elements of ownarray) {
    console.log(elements);
}
//for each
ownarray.forEach(function (element, index, array) {
    console.log(element + " " + index);
});

//using fat arrow 
ownarray.forEach((element, index, array) => {
    console.log(element + " " + index);
});
//*************************************************************************************************** */
//searching and filter data using array 5:00
console.log(ownarray.indexOf(1));
console.log(ownarray.push("rammmmm"));
console.log(ownarray);
console.log(ownarray.pop());//remove last element
console.log(ownarray);
/////////////////////////////////////////////////////////////////////////////////////
//task
const month = ['jan', 'feb', 'march', 'april', 'may'];
//add june

const newMonth = month.splice(5, 0, 'dec'); //4 is index number 5:43 :
// 0 for add 
console.log(month);

//what is return value  splice method
console.log(newMonth);

//update value in arraya
//3 adding the value int array
// 1: is index number 
//2:is delete or add number 
//  1 for delete
//  0 for add 
//3:your data add value 
const updatemonth = month.splice(1, 1, 'Jan');
console.log(month);

const indexofmonth = month.indexOf('feb');
console.log(indexofmonth);
if (indexofmonth != -1) {
    console.log(indexofmonth)
} else {
    console.log('no such data');
}

//delete data from array
const checkdata = month.indexOf('may')
if (checkdata != -1) {
    const deletedata = month.splice(checkdata, 1);
    console.log(month);
    console.log();
} else {
    console.log('No such data found');
}
//*********************************************************************** */

///Map and reduce method 
//map hide the data and return view 
const Arraymap = [4, 5, 6, 13, 2];
//num>9
let newAr = Arraymap.map((currentElement, index, arr) => {
    return currentElement > 9;
});
console.log(Arraymap);
console.log(newAr);

let Arrnew = Arraymap.map((currentElement, index, arr) => {

    return ` Index number = ${index} and current value is ${currentElement} belong to${arr}`;
});
console.log(Arrnew);

//6:6:0
//Map have folling method
//1 reduce()
//2 sort()
//3 filter()
//4 etc


const oarr = [5, 3, 4, 8, 12, 44, 33];
//oarr.forEach(x => x*x).reduce((total,value)=> total + value)
oarr.map(x => x * x).reduce((total, value) => total + value)


//find the square root of each number 
let arr = [25, 1, 36, 49, 64, 81];
let arrsqr = arr.map((curelm) => {
    return curelm
});
//its show all element 
console.log(arrsqr);
//it give the square root of number from array
let arrsqrans = arr.map((curelm) => {
    return Math.sqrt(curelm);
})
//its show all element 
console.log(arrsqrans);

//multiply each element by 2 and return only those elemnt which 
//are greater than 10?
//using chaining too effect 
let multibytwo = arr.map((cuuelm) => {
    return cuuelm * 2;
}).filter((curelm) => {
    return curelm > 10;//its only give all above 10 value 
})
console.log(multibytwo);


//Reduce method(its take 4 argument )
//1 Accumulator (its collect all )
//2 current value 
//3 current index
//4 source array
//this metohd convert 3d or 2d array into 1d array 
//we use where we want only single value as answer
//example find out the total or addintion or sub of all number etc 

let arrRdu = [5, 5, 5, 5, 5];
let rdu = arrRdu.reduce((accumulator, ce, index, ar) => {
    //return accumulator= accumulator+ce;
    // return accumulator= accumulator-ce;
    return accumulator = accumulator * ce;
})
console.log(rdu);

//convert into 3d or 2d array in 1d
//using concat method 
const oned = [['aa1', 'aa2'],
['aa3', 'aa4'],
['aa5', 'aa6']
];
let flatarr = oned.reduce((accum, cuur) => {
    return accum.concat(cuur);
})

console.log(flatarr);


//************************************************************** */
//String in javaScript
//************************************************************************** */

let nameString = "Ram patil";
let LastString = 'Patil Om';
let ytname = new String("Using new Keyword ");//`not use mostly in IT`
console.log(nameString);
console.log(LastString);
console.log(ytname);
//find length
console.log(nameString.length);

//using Escape character 
//use this where u want to us symol in string 
//then us this

let fullsent = "i am happy for you \"ram\"";
console.log(fullsent);

//another way to use 
let fullsents = 'i am happy for you "ram"';
console.log(fullsents);
// in String we use this code 
//1 \' code for single quote
//2 \" double wuote 
//3 \\ use backslash

//findig string in string
//6:51:00
//method use index of  
//last index of mehtod 
const StringInSideStringDemo = 'hello i am Java Script ';
console.log(StringInSideStringDemo.indexOf("Java"));//output 11 : its 
console.log(StringInSideStringDemo.indexOf("e", 1));
//using lastindex of 
console.log(StringInSideStringDemo.lastIndexOf("J", 11));


//Search method in string(we only give data not index number ) its return position 
let Sdata = StringInSideStringDemo.search("va");
console.log(Sdata);

//Extracting String part
// we have 3 method 
//1 slice(strat, end)
//2 substr(start,length)
//3 substring(start,end)
//its return extracted part in new string 
//its take two parameters : 1 start postion 2 end position(end not include)
//1 slice(start)
var str = "apple,bananaa,kiwi";
let Sstr = str.slice(0, 4); //its give 0 to 3 index data only 
console.log(Sstr);
let ress = str.slice(7, -2); //its go 7 to last number of - 2 
console.log(ress);

//try 
//display only 280 char of string like the one used in twitter? 

let twitter = "i am twitter i am twitter i am twitter  i am twitter";
let countstr = twitter.slice(0, 24); // its show or display  only 0 to 24 char 
console.log(countstr);
console.log(countstr.length);

// 2 using substring 
//subString can't accept negative index 
var strSubString = "apple,bananaa,kiwi";
let ressub = strSubString.substring(0, 4);
console.log(ressub);
let Onlyindex = strSubString.substring(5);
console.log(Onlyindex);

//3 substr method (molsty use for traveling backword direction )
//diff is that the second parameter specifies the length of the extraced part.
var strOnlysubStr = "apple,bananaa,kiwi";
let resSubstr = strOnlysubStr.substr(-4);
console.log(resSubstr);
//replacing  String content 
//method have replace(searchFor,replaceWith);
let bioDate = 'i am example of replacing string ';
let dataRe = bioDate.replace('of', 'DATACHANGE');
console.log(dataRe);
//point to remember 
//1 its does not change the string 
//2its called on its return a new STring 
//3 its only replace the 1st match 
//********************** */

//Extracting String Character
// 3 method use 
//1charAt(position)-(use return the char)
//2 charCodeAt(position)
//3property access[]


//1 charAt
let strEx = "Hello World";
console.log(strEx.charAt(3));

//2charCode
//charCode return the UTF-16 code 
//charCodeAt() Method return the unicode of the character at a specified  index in a string 
let strExCode = "Hello World";
console.log(strExCode.charCodeAt(2));


///3 property access 
//its allow the property access [] on string 
let strpro = "Hello World";
console.log(strpro[0]);
console.log(strpro.toLowerCase());
console.log(strpro.toUpperCase());
console.log(strpro.concat(" ", 'Vijay'));
//remove space using trim
let remspace = "  H     I ";
console.log(remspace.trim());//only remove before and after space

//convert String into Array using split method

var txt = "a,b,c,d,e,f,g"; // its string
console.log(txt.split(",")); //split using commas
console.log(txt.split(" "));
console.log(txt.split("|"));

//************************************************************************************************************* */
//Date and Time 
//its platform independent format
//we can create date using 4 type 
//1  new Date();
//2  new Date(year,month,day,hours,minutes,second,milliseconds)//its take 7 argu
//3  new Date(milliseconds);
//4  new Date(date string);
//************************************************************************************************************* */

//date method (get and set )
//Time method (get and set )

// using normal
let curDate = new Date();
console.log('date is ' + curDate);

//2 
console.log(new Date().toLocaleString()); //its give date and time 
console.log(new Date().toLocaleDateString()); //only give date 
console.log(new Date().toLocaleTimeString()); //only give time
console.log(new Date().toString());
console.log(Date.now()); //its give milli sec


// show month 
//note Javascript count month 0 to 11 
var d = new Date(2022, 11, 24, 10, 33, 30, 0);
console.log(d.toLocaleDateString());

var monthShow = new Date(2022, 4, 3);
console.log(monthShow.toString());

// Date Method 
const AllDateMethod = new Date();
console.log(AllDateMethod.getTime());
console.log(AllDateMethod.getFullYear());
console.log(AllDateMethod.getMonth());
console.log(AllDateMethod.getDay());
console.log(AllDateMethod.getDate());
console.log(AllDateMethod.getHours());

//set (give all in milli )
console.log(AllDateMethod.setTime(11));
console.log(AllDateMethod.setFullYear(2000));
console.log(AllDateMethod.setMonth(5));
//console.log(AllDateMethod.setDay(4));
console.log(AllDateMethod.setDate(10));
console.log(AllDateMethod.setHours(5));

//8:02:00
//every thing on page  till 8:16
//******************************************************************************** */
//Math object in Javascript 
//******************************************************************************** */
console.log(Math.PI);
let numMath = 10.655;
console.log(Math.round(numMath));//it Convert the number if is more than 0.5
console.log(Math.pow(3, 3));//its multiply both number 
console.log(Math.sqrt(25));
console.log(Math.abs(-52));//its convert the negative value into positive
console.log(Math.abs(4 - 6));
console.log(Math.ceil(4.4));//if after . is any value is more than 1 or 1 then is incremnet by 1.00
console.log(Math.floor(4.7));//its give as its value 
console.log(Math.min(15, 46, 2, 3, 87, 44, 11));
console.log(Math.max(15, 46, 2, 3, 87, 44, 11));

//moslty use 
console.log(Math.random());//its give always 0.0+ value random number  
console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10));//it give number between 0 to 9
//trunc method return the integer part of a number 
console.log(Math.trunc(4, 6));//its never return value in decimal d
console.log(Math.trunc(-99.02));

//************************************************************************************************************* */
//*
//*
//*
//*                             DOM  in javascript
//*(document object model )
//*
//*
//************************************************************************************************************* */
//What is Window vs Document 
//window : is also called as global object 
// window is complete browser             
// we can directly use : where window related operation i want to perfom
//

//Document :is a child of Window object 
//we use : when to perform some operation on html Element 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////
//                                          Window
//                              Dom         Bom             javascript
//                             script       nevigator          object                              
//                              <html>            screen            Array 
//                                          Location          Function
//                                          frames  
//                                          history             
//                                       Xml Httpsrequest                            
////////////////////////////////////////////////////////////////////////////////////////////////////////
//****************************
// BOM: is browser object Model 
//  use : which deal with browser components and  all window related operation
//ex: 
function backTask() {
    window.history.back();
}
//alert(location.href);//show current url 
//if(confirm('want to visit  again ?'))/
//{
// location.href="http://www.google.com";
//}    

//********************************************************************************************************** */

//DOM Nevigation 
//root element of document : is html
//to check using :documnet.documnetElement
//1 documnet.documnetElement
//2 documnet.body
//3 documnet.body.childNodes
//4 documnet.body.childNodes.length
//5 documnet.body.hasChildNodes() 


//////////************** */ 9: 12 :000
//document.body.parentNode
//document.head.nextSibling//9:20



//whats is diff get element by id 
//whats getElementById?
//: 
//element  = document.getElementsById(one);
//return a Reference to the element by its id 
//if the element with the specific id is not in the documnet 
//it will return null

// what is querySelecotr()?
//example
///element = document.querySelector(oneisChild);
//its return the first element within the document 
//that match the specified group of selectors or null if no matches are found 
//9:38:383





//         Dom Completed

//9 43 
//******************************************************************* */

//                Event In JavaScript 

//****************************************************************** */                

//4 way of writing event 
//what is event object 
//mouseEvent in javascript
//Keyboard in javascript 
//inputEvent in javascript 
//******************************************************************* */

//things that happen  to html element
//when js is used in html pages,javascript can "react on thses event "
//event -can be something the browser does or something a user does
//example : 
//button click

//**************************************************************** */


//4 way of writing
//1 using alert();
//2 by calling function
//3 using lnline event(html  on cilck =" ")
//4 using event Listeners
//check : Page eventinjs

//************************************************** */
//what is event object?
//it is the parent object of the event object 
//for example 
//mouseEvent focusEvent, Keyboardevent 
// : mouse interacts with the html 

//************************************************* */
//KeyboardEvent
//when user enter any inpute using key

//*********************************************** */

//inputevent in javascript 
//the value of element occurs when the value of an event has changed
//*********************************************************** */

//what is diif bet onClick and addeventListener ?
//1028

//addeventListener does not overwrite exiting event handlers,
//wheres onclick overrides any existing onclick = fn event handlers
//moslty use addeventListener here 


//************************************************************************ */
//103101
//                  Timimg baseevent in javascript
//the window object allows execution of code at specified time intervals
//thses time interval are called timing events
//the two key method to use with javascript are :

//mostly use ;
//1 setTimeout(function,miliseconds)
//use: 
//execute a function ,after waiting a specified number milliseconds.
//2 setInterval(function,miliseconds)
//same as setTimeout() but its executing of function continuously 
//3  clearTimeout()
//
//4 clearInterval()
//****************************************************************** */
//oops in javascript
//what is object literal :
//its a simple key and value pair data str 
//we can store vaiable and method in one 

//how to create object ?
//way 1
let data = {
    //key           value
    usernameis: "ram",
    userage: 25,
    payment: 25000,
    getdata: function () {
        console.log(`may name is ${data.usernameis}`)
    }
}
console.log(data.usernameis);
//or
data.getdata();


//way  2
//if we want object as value set 
let bestwaydata = {
    //key           value
    usernameis: {
        firstName: 'Ram',
        lastName: 'Patil'
    },
    userage: 16,
    payment: 10000,
    getdata: function () {
        console.log(`may name is ${bstwaydata.usernameis}`)
    }
}

console.log(bestwaydata.usernameis.lastName);


//what is this object?
//it contain the current context
//this object have different values depending on where it is placed 

//for example :1
console.log(this); //both belong to window object
//for example 2 
function myn() {
    console.log(this);//both belong to window object
}
myn();// : 

//
const objS = {
    myage: 54,
    mynamei() {
        console.log(this);

    }
}
objS.mynamei();
//in fat arrow we cant use this keyword


//********************************************* */
let usedata = {
    mynm: {
        rname: "Ram",
        sname: "pawar"
    },
    mage: 14,
    getdata() {
        console.log(`mynameis ${this.mynm.sname} and my age is ${this.mage}`);
    }
}

usedata.getdata();


///***************************************************************************************************************************************** */

//             Array Destrucring 

//*********************************************************************************************************** */

const EducationData = ['math', 100, 60, 'pass']
// let subject = EducationData[0];
// let OutOfMark = EducationData[1];
// let Score = EducationData[2];
// let Result = EducationData[3];

//console.log(Result);

//best way to do 
let [subject, OutOfMark, Score, Result, stud = "Ram"] = EducationData;
console.log(OutOfMark);

//***************************************************************************************** */

//            object  Destrucring

//**************************************************************************************** */

const myBioDataedu = {
    unameobj: 'yanika',
    usnameobj: 'okina',
    age: 24
}

// let ageisk = myBioDataedu.age;
// console.log(ageisk);

//bst way to do 
// let {unameobj,usnameobj,age}=myBioDataedu;
// console.log(unameobj);
//1126
//************************1******** ******************************/

//object properties 
//we can use new dynamic properties
let nameofuser = "ram";
const databio = {
    [nameofuser]: "hello how are you ?",
    26: "is my age"
}
console.log(databio);

//no need to write key and value if both are same 

let nameisd = "vinod";
let ageee = 26;

// const staticbio ={
//     nameisd : nameisd,
//     ageee: ageee

// }

const staticbio = { nameisd, ageee }
console.log(staticbio);

//*********************************************************************************************** */

//                                      Spread Operator

//*********************************************************************************************** */

const colors = ['red', 'yellow', 'green', 'blue'];
const mycolor = ['red', 'yellow', 'green', 'blue', 'black'];
//best way to mention 
const fevcolor = [...colors, 'black'];
console.log(fevcolor);

//************************************************************************************************ */
//                                        ES7 features 2016
//************************************************************************************************ */


//1 aaray include 
const colorsOf = ['red', 'yellow', 'green', 'blue'];
const isPresent = colorsOf.includes('red');
console.log(isPresent);
//2 **
console.log(2 ** 3);


//*****************************************2017  */
const person = { name: 'tani', age: 55 }
console.log(Object.values(person));
console.log(Object.entries(person));

//********************************************************************************************** */
//2018
const person1 = { name: 'tani', age: 55 };
const person2 = { ...person1 };
console.log(person2);
//**************************************************************************************************** */
//2019 
//flat method 
//
//const arr1 = [[z-1,z-2],[z-1,z-2],[z-1,z-2],[z-1,z-2],[z-1,z-2],[z-1,z-2]];
//console.log(arr1.flat());
//console.log(arr1.flat(2));//as per own 
//console.log(arr1.flat(Infinity));

//2020
//1 bigint //handle any number 
//let numbig = Number.MAX_SAFE_INTEGER;
//best option  add n
//example 
// console.log(13165135135161+12n);
//"use strict"
//x = 10;

//**************************************************************************************************************/
//                                             JavaScript                        
//12:7:00
//**************************************************************************************************************/
//eventPropagation
//higer order function
//callback function
//function currying(we will see after async js section)
//callback hell
//ajax call using xmlHttprequest
//json section
//fetch api
//promisess
//async-await 
//errorhandling in js 

//**************************************************************************************************************/
//                                            Project 
//**************************************************************************************************************/

//1212
//what is eventPropagation
//: which order the element receive the  event 
//its have two type
// 1 bubble Phase (default run)
// 2 capture Phase 
// 3 Target Phase : use for particulr target 

// flow : 

//                                          window 
//                                          document
//                                           <html>
//                                           <body>
//                                           <div>
//                                          <button>
//                                         target phase

//what bubble phase : when child event came 1st and after that their parent event
//what is capture phase: when parent event came first after that thier child eent came 

//eventStopPropagation stop this all propagation
//if i want to add run only one specific event then we will use 
//addeventlistener('id or class',functionname,false); //false by default (bobble sort)
//if theri is true then its is capture phase

//********************************************************************************************************* */
// CallBack function
//function which get passed as an argument to another function is called CBF
//we can pass the argument to another function to called back at a later time 

//create calculator


const addfunc = (a, b) => {
    return a + b;
}//callbackfunction

const subfunc = (a, b) => {
    return a - b;
}//callbackfunction

const divfunc = (a, b) => {
    return a / b;
}//callbackfunction

const multifunc = (a, b) => {
    return a * b;
}//callbackfunction

//higer order function
const calculator = (num1, num2, op) => {
    return op(num1, num2);
}

calculator(5, 2, addfunc);
console.log(calculator(5, 2, addfunc));
console.log(calculator(5, 2, subfunc));
console.log(calculator(5, 2, multifunc));
console.log(calculator(5, 2, divfunc));



//************************************************************************************ */

//                              Asynchronous javascript

//************************************************************************************ */
//hoisting in javasceript
//scope chian
//lexical scoping in js
//strict mode //we must follow order as per js 
//this keyword
//cloures in js
//what is asynchronous js programming 
//what is event loop 
//********************************************************************************** */
//what is hoisting in javasceript?
//its mechanism where variable and function declarations are moved to the 
//top of their scope before the code execute 
//example:
//  (format check )
//  console.log(nameisram);
//  let nameisram ="Ram";


//what is scope chian and lexical scoping
//use to resolve the value of variable names in js
// scope chian is define lexical scoping
//what is lexical scoping(also know as closures) ?(parent cant access the child variable and method or (outer function cant access inner value) )
//inner function can get access tto their parent function variable but the vice-versa is not true 

//example

let aaq = "hello ";//global scope 

const firstF = () => {
    let bb = "i am bb function "
    const secondF = () => {
        let cc = " iam cc function "
        console.log(aaq + bb + cc);
    }
    secondF();//
}

firstF();


//what is closures in javascript?
//it is the combination of a function bundle together with references to its surrounding state ()
//using closures we can access to an outer function scope from an inner function 

//note : in js closure are created every time a function is created ,at function creation time 
//example 
const outerfun = (oa) => {
    let ob = 10;
    const innerfun = () => {
        let suminn = oa + ob;
        console.log(`the sum of the two no is ${suminn}`);
    }
    return innerfun;
}
console.log(outerfun(2));
let res = outerfun(5);
res();

// what is synchronous and asynchronous javascript ?
//same as  java //synchronous


//example of synchronous
const fun22 = () => {
    console.log(`function 22 is called`);
}



const fun11 = () => {
    console.log(`function 11 is called `);
    fun22();
    console.log(`function 11 is called again`);
}

fun11();


//example of asynchronous
const fun222 = () => {
    setTimeout(() => {
        console.log(`function 222 is called `);
    }, 2000)
}


const fun111 = () => {
    console.log(`function 111 is called `);
    fun222();
    console.log(`function 111 is agian called `);
}

fun111();



//********************************************************************************************************* */

//                                               Event loop in js

//***************************************************************************************************** */
//1305
