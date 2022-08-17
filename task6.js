let birthYear = 1998;
const para2 = document.createElement("p");
const node2 = document.createTextNode(`My Birth Year Is ${birthYear}.`);
para2.appendChild(node2);


const para = document.createElement("p");
const node1 = document.createTextNode(`Data Type of my declared variable is ${typeof(birthYear)}`);
para.appendChild(node1);
const elem = document.getElementById("id01");
// getElementsByID;
// console.log(elem)
elem.appendChild(para);
elem.insertBefore(para2,para);