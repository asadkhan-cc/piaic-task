let std_Obj = {
    Name:"Abdullah Abdullah",
    Age : 24,
    Certificate :["Mobile Application DEV","FrontEnd DEV",]
} 

alert(`Name of student ${std_Obj.Name}`);
alert(`Age of student ${std_Obj.Age}`);
alert(`Certified: ${std_Obj.Certificate[0]}`);

// let std_Obj_show = document.createElement("div");
// std_Obj_show.innerHTML = std_Obj;

// let bdy = document.getElementsByTagName("body");
// bdy.appendChild(std_Obj_show);

var div = document.createElement("h1");    // Create DIv Node
div.innerHTML = 'Name:"Abdullah Abdullah" \n Age : 24 \nCertificate :["Mobile Application DEV","FrontEnd DEV",]';                   //-------------
document.body.appendChild(div);             //------ Then append it to body

