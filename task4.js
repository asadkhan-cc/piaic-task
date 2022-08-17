const para = document.createElement("p");
const node = document.createTextNode("Yeah! I can write HTML by using JavaScript.");
para.appendChild(node);
const elem = document.getElementById("id01");
// getElementsByID;
// console.log(elem)
elem.appendChild(para);