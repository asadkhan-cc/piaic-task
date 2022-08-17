// getting the main div from body 
const elem = document.getElementById("id01");

//creating the heading
const main_Heading = document.createElement("h1");
const heading_Data = document.createTextNode("Rules for naming js variable");
main_Heading.appendChild(heading_Data);

//appending the heading in main div
elem.appendChild(main_Heading);

// Creating an ol 
const ordered_List = document.createElement("ol");

// creating line item1
const line_Item1 = document.createElement("li");
line_Item1.innerHTML=`Variable names can only contain _ , $ , [0-9] and [a-z,A-Z].`

// appending line item1
ordered_List.appendChild(line_Item1);

// creating line item2
const line_Item2 = document.createElement("li");
line_Item2.innerHTML=`For example $my_1stVariable`;

// appending line item2
ordered_List.appendChild(line_Item2);

// creating line item3
const line_Item3 = document.createElement("li");
line_Item3.innerHTML=`Variables must begin with a Letter , $ or _ . For example $name, _name or name`;

// appending line item3
ordered_List.appendChild(line_Item3);

// creating line item4
const line_Item4 = document.createElement("li");
line_Item4.innerHTML=`Variable names are case Sensitive.`;

// appending line item4
ordered_List.appendChild(line_Item4);

// creating line item5
const line_Item5 = document.createElement("li");
line_Item5.innerHTML=`Variable names should not be JS KeyWords.`;

// appending line item5
ordered_List.appendChild(line_Item5);

//================================finally============================
// appending ol into main div
elem.appendChild(ordered_List);