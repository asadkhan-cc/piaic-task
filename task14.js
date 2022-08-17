//declaration a variable
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
// getting the main div from body 
const elem = document.getElementById("id01");

//creating the heading1
const add_Heading1 = document.createElement("h1");
const heading1_Data = document.createTextNode(`var a is: ${ a } var b is: ${ b } result of var result = --a - --b + ++b + b--; is  ${result}`);
add_Heading1.appendChild(heading1_Data);

//appending the heading in main div
elem.appendChild(add_Heading1);
// ===========================================================================================================
a = 2, b = 1;
//creating the heading2
const add_Heading2 = document.createElement("h1");
const heading2_Data = document.createTextNode(`var a is: ${ a } var b is: ${ b } result of --a; is  ${--a}`);
add_Heading2.appendChild(heading2_Data);

//appending the heading in main div
elem.appendChild(add_Heading2);
// ===========================================================================================================
a = 2, b = 1;
//creating the heading3
const add_Heading3 = document.createElement("h1");
const heading3_Data = document.createTextNode(`var a is: ${ a } var b is: ${ b } result of --a - --b; is  ${--a - --b}`);
add_Heading3.appendChild(heading3_Data);

//appending the heading in main div
elem.appendChild(add_Heading3);
// ===========================================================================================================
a = 2, b = 1;
//creating the heading4
const add_Heading4 = document.createElement("h1");
const heading4_Data = document.createTextNode(`var a is: ${ a } var b is: ${ b } result of --a - --b + ++b; is  ${--a - --b + ++b}`);
add_Heading4.appendChild(heading4_Data);

//appending the heading in main div
elem.appendChild(add_Heading4);
// ===========================================================================================================
a = 2, b = 1;
//creating the heading5
const add_Heading5 = document.createElement("h1");
const heading5_Data = document.createTextNode(`var a is: ${ a } var b is: ${ b } result of --a - --b + ++b + b--; is  ${--a - --b + ++b + b--}`);
add_Heading5.appendChild(heading5_Data);

//appending the heading in main div
elem.appendChild(add_Heading5);
// ===========================================================================================================
