//all refer to index.html
let val;
val = document.all;
val1 = document.all[1];
val2 = document.all.length;
val3 = document.head;
val4 = document.doctype;
val5 = document.body;
val6 = document.domain;
val7 = document.URL;
val8 = document.characterSet;
val9 = document.contentType;
val10 = document.forms;
val11 = document.forms[0];
val13 = document.forms[0].id;
val14 = document.forms[0].method;
val15 = document.forms[0].action;
val12 = document.forms[1]; //undefined because there is no form in that index
val16 = document.links;
val17 = document.links[0];
val18 = document.links[0].id;
val19 = document.links[0].className; //see the index.html class
val20 = document.links[0].classList;
val21 = document.links[0].classList[1]; //to access the specific one
val22 = document.images; //index html do not have any images
val23 = document.scripts; //All script tag will be shown
val24 = document.scripts[2].getAttribute("src");
let scripts = val23;
let scriptsArr = Array.from(val23);
scriptsArr.forEach(function (script) {
  console.log(script);
  console.log(script.getAttribute("src"));
});

console.log(val);
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);
console.log(val7);
console.log(val8);
console.log(val9);
console.log(val10);
console.log(val11);
console.log(val12);
console.log(val13);
console.log(val14);
console.log(val15);
console.log(val16);
console.log(val17);
console.log(val18);
console.log(val19);
console.log(val20);
console.log(val21);
console.log(val22);
console.log(val23);
console.log(val24);
//IT IS ALWAYS GOOD PRACTICE TO write taskTitle as const
const taskTitle = document.getElementById("task-title");
//document.getElemntById()
console.log(taskTitle);
//Get things from the element
console.log(taskTitle.id);
console.log(taskTitle.className);
//change styling
taskTitle.style.background = "#333";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "5px";
//taskTitle.style.display = "none";

//Change the Content
taskTitle.textContent = "Task Lists";
taskTitle.innerText = "My Tasks";
taskTitle.innerHTML = '<span style="color:red">Task List</span>';
//document.query Selector
console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".card-title"));
console.log(document.querySelector("h5")); // if there is more than one h5, ti will get the first one

document.querySelector("li").style.color = "red";
document.querySelector("ul li").style.color = "blue";
document.querySelector("li:last-child").style.color = "green";
document.querySelector("li:nth-child(3)").style.color = "orange";
document.querySelector("li:nth-child(4)").textContent = "Hello World!"; //change the content
document.querySelector("li:nth-child(odd)").style.background = "#ccc";
document.querySelector("li:nth-child(even)").style.background =
  "rgb(128,128,0)";

//document.getElementsbyClass
const items = document.getElementsByClassName("collection-item");
console.log(items);
console.log(items[0]);
items[0].style.color = "red";
items[2].textContent = "Hello";
const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");
console.log(listItems);

//document.getElementsbyTagName
const lis = document.getElementsByTagName("li");
console.log(lis);
console.log(lis[0]);
lis[0].style.color = "red";
lis[3].textContent = "Hello";
//Convert HTMl collection into Array
list = Array.from(lis);
listRev = list.reverse();
console.log(listRev);
console.log(list);
list.forEach(function (li, index) {
  console.log(li.className);
  li.textContent = ` ${index}: Hello`;
});
//document.queryselector(all)
const items2 = document.querySelectorAll("ul.collection li.collection-item");
items2.forEach(function (item, index) {
  item.textContent = `${index}:Hello`;
});
console.log(items2);

const liOdd = document.querySelectorAll("li:nth-child(odd)");
const liEven = document.querySelectorAll("li:nth-child(even)");

liOdd.forEach(function (li, index) {
  li.style.background = "#ccc";
});
/* liEven.forEach(function (li, index) {
  li.style.background = "#fff59d";
});
 */
for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = "#f4f4f4";
}
