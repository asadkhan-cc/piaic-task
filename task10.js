//declaration a variable
let x ;
// getting the main div from body 
const elem = document.getElementById("id01");

//creating the heading1
const add_Heading1 = document.createElement("h1");
const heading1_Data = document.createTextNode(`Value after variable declaration is: ${ x }`);
add_Heading1.appendChild(heading1_Data);

//appending the heading in main div
elem.appendChild(add_Heading1);
// ===========================================================================================================
//initializing a variable
 x = 8 ;
//creating the heading2
const add_Heading2 = document.createElement("h1");
const heading2_Data = document.createTextNode(`Initial Value is: ${ x }`);
add_Heading2.appendChild(heading2_Data);

//appending the heading in main div
elem.appendChild(add_Heading2);

// ===========================================================================================================
//initializing a variable
++x;


//creating the heading3
const add_Heading3 = document.createElement("h1");
const heading3_Data = document.createTextNode(`Value after Increment is: ${ x }`);
add_Heading3.appendChild(heading3_Data);

//appending the heading in main div
elem.appendChild(add_Heading3);

// ===========================================================================================================
//initializing a variable
x +=7 ;



//creating the heading4
const add_Heading4 = document.createElement("h1");
const heading4_Data = document.createTextNode(`Value after addition is: ${x}`);
add_Heading4.appendChild(heading4_Data);

//appending the heading in main div
elem.appendChild(add_Heading4);

// ===========================================================================================================
//initializing a variable
x--;


//creating the heading5
const add_Heading5 = document.createElement("h1");
const heading5_Data = document.createTextNode(`Value after decrement is: ${x}`);
add_Heading5.appendChild(heading5_Data);

//appending the heading in main div
elem.appendChild(add_Heading5);


// ===========================================================================================================
//initializing a variable
x %= 3


//creating the heading6
const add_Heading6 = document.createElement("h1");
const heading6_Data = document.createTextNode(`the remainder is ${ x }`);
add_Heading6.appendChild(heading6_Data);

//appending the heading in main div
elem.appendChild(add_Heading6);




//appending the heading in main div

