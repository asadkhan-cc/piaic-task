let x = 8 , y = 11 , sum;
// getting the main div from body 
const elem = document.getElementById("id01");

//creating the heading
const main_Heading = document.createElement("h1");
const heading_Data = document.createTextNode(`the sum of ${x} and ${y} is ${sum = x + y}`);
main_Heading.appendChild(heading_Data);

//appending the heading in main div
elem.appendChild(main_Heading);
