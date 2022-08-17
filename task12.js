let currency_in_riyal = 25;
let currency_in_usd = 10;

function convertUsdToPkr(usd) {
  return (usd * 155);
}

function convertRialToPkr(ray) {
  return (ray*41);
}   
console.log(25*41);
console.log("riy",convertRialToPkr(currency_in_riyal),"",convertUsdToPkr(currency_in_usd) );
// getting the main div from body
const elem = document.getElementById("id01");

//creating the heading1
const add_Heading1 = document.createElement("h1");
const heading1_Data = document.createTextNode(
  `CURRENCY to PKR`
);
add_Heading1.appendChild(heading1_Data);

//appending the heading in main div
elem.appendChild(add_Heading1);
// ===========================================================================================================
//initializing a variable
x = 8;
//creating the heading2
const add_Heading2 = document.createElement("h4");
const heading2_Data = document.createTextNode(
  `TOTAL CURRENCY to PKR is ${Number(convertRialToPkr(currency_in_riyal))  + Number(convertUsdToPkr(currency_in_usd)) }`
  );
add_Heading2.appendChild(heading2_Data);

//appending the heading in main div
elem.appendChild(add_Heading2);

elem.style.margin="auto";
elem.style.maxWidth="fit-content";
elem.style.textAlign="center";

