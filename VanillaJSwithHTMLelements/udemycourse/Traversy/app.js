/* //IT IS ALWAYS GOOD PRACTICE TO write taskTitle as const
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
  "rgb(128,128,0)"; */

//document.getElementsbyClass
/* const items = document.getElementsByClassName("collection-item");
console.log(items);
console.log(items[0]);
items[0].style.color = "red";
items[2].textContent = "Hello";
const listItems = document
  .querySelector("ul")
  .getElementsByClassName("collection-item");
console.log(listItems); */

//document.getElementsbyTagName
const lis = document.getElementsByTagName("li");
console.log(lis);
console.log(lis[0]);
lis[0].style.color = "red";
lis[3].textContent = "Hello";
//Convert HTMl collection into Array
lis = Array.from(lis);
// const listItems = document
//   .querySelector("ul")
//   .getElementsByClassName("collection-item");
// console.log(listItems);
