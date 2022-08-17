let temp_in_celsius = 25;
let temp_in_faran = 70;

function convertToF(celsius) {
  return (celsius * 9) / 5 + 32;
}

function convertToC(temp) {
  var conversion;
  conversion = (5.0 / 9.0) * (temp - 32);
  return conversion;
}   

// getting the main div from body
const elem = document.getElementById("id01");

//creating the heading1
const add_Heading1 = document.createElement("h1");
const heading1_Data = document.createTextNode(
  `Temp in Celcius ${temp_in_celsius}C conver to Fahrenheit is ${convertToF(temp_in_celsius)}F `
);
add_Heading1.appendChild(heading1_Data);

//appending the heading in main div
elem.appendChild(add_Heading1);
// ===========================================================================================================
//initializing a variable
x = 8;
//creating the heading2
const add_Heading2 = document.createElement("h1");
const heading2_Data = document.createTextNode(
  `Temp in Fahrenheit ${temp_in_faran}F conver to Celcius is ${convertToC(temp_in_faran)}C`
  );
add_Heading2.appendChild(heading2_Data);

//appending the heading in main div
elem.appendChild(add_Heading2);
