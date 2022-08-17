let x = 8 , y = 11 , sum;
// getting the main div from body 
const elem = document.getElementById("id01");

//creating the heading1
const add_Heading1 = document.createElement("h1");
const heading1_Data = document.createTextNode(`the sum of ${x} and ${y} is ${sum = x + y}`);
add_Heading1.appendChild(heading1_Data);


//creating the heading2
const add_Heading2 = document.createElement("h1");
const heading2_Data = document.createTextNode(`the difference between ${x} and ${y} is ${sum = x - y}`);
add_Heading2.appendChild(heading2_Data);


//creating the heading3
const add_Heading3 = document.createElement("h1");
const heading3_Data = document.createTextNode(`the product of ${x} and ${y} is ${sum = x * y}`);
add_Heading3.appendChild(heading3_Data);

//creating the heading4
const add_Heading4 = document.createElement("h1");
const heading4_Data = document.createTextNode(`the divident of ${x} and ${y} is ${sum = x / y}`);
add_Heading4.appendChild(heading4_Data);






//appending the heading in main div
elem.appendChild(add_Heading1);
elem.appendChild(add_Heading2);
elem.appendChild(add_Heading3);
elem.appendChild(add_Heading4);

