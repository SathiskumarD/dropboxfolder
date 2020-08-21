//Create Element
const li = document.createElement("li");

//Add Class
li.className = "collection-item";
//Add id
li.id = "new-item";
//Add attribute
li.setAttribute("title", "New Item");
//create text node and append
li.appendChild(document.createTextNode("Hello World!"));
//Append li as child to ul
document.querySelector("ul.collection").appendChild(li);
//Create new link element
const link = document.createElement("a");

console.log(li);
