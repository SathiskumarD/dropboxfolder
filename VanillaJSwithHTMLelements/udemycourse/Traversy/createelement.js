//Create Element
const li = document.createElement("li");

//Add Class
li.className = "collection-item";
//Add id
li.id = "new-item";
//Add attribute
li.setAttribute("title", "New Item");
//create text node and append
li.appendChild(document.createTextNode("Hello World"));
//Append li as child to ul
document.querySelector("ul.collection").appendChild(li);
//Create new link element
const link = document.createElement("a");
//add classes
link.className = "delete-item secondary-element";
//Add icon html
link.innerHTML = '<i class="fa fa-remove"><i>';
//Append link to li
li.appendChild(link);

console.log(li);

//Replace Element

//create Element
const newHeading = document.createElement("h2");
//add id
newHeading.id = "task-title";
//New text node
newHeading.appendChild(document.createTextNode("Task List"));
//get the old heading
const oldHeading = document.getElementById("task-title");
//parent
const cardAction = document.querySelector(".card-action");
//replace
cardAction.replaceChild(newHeading, oldHeading);

console.log(newHeading);

//Remove element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

//remove list item
lis[0].remove();

//remove child
list.removeChild(lis[3]);

//Classes & Attr
const firstLi = document.querySelector("li:first-child");
const link1 = firstLi.children[0];

val1 = link1.className;
val2 = link1.classList;
val3 = link1.classList[0];
link1.classList.add("test");
link1.classList.remove("test");
console.log(val1);
console.log(val2);
console.log(val3);
//Attribute
val4 = link.getAttribute("href");
console.log(val4);
val5 = link.setAttribute("href", "https://www.google.com");
//console.log(val5);
val6 = link.hasAttribute("href");
console.log(val6);

//console.log(val7);
//console.log(val8);
