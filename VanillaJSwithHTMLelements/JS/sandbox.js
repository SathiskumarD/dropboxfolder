// const paras = document.querySelector("p");
// console.log(paras);
/* const para3 = document.getElementsByClassName("error");
console.log(para3);
const para3class = document.querySelector(".error");
console.log(para3class); */
/* const para4 = document.querySelector("div.error");
console.log(para4); */
//copying selector from console
/* const para5 = document.querySelector("body >h1");
console.log(para5); */

//Grabbing multiple elements

// const paras2 = document.querySelectorAll("p");
// console.log(paras2);
//selecting single element
//console.log(paras2[0]);
//forEach on node list * Very important
/* paras2.forEach((para) => {
  console.log(para);
}); */

/* const errors = document.querySelectorAll(".error");
console.log(errors); */
//get an element by ID
/* const title = document.getElementById("page-title");
console.log(title); */
//get an element by Class Name and ForEach method cannot be used
/* const errors2 = document.getElementsByClassName("error");
console.log(errors2);
console.log(errors2[0]); */
//get element by Tag name

/* const paras4 = document.getElementsByTagName("p");
console.log(paras4);
console.log(paras4[1]);
 */
//const para1 = document.querySelector("p");
//para1.innerText = "Welcome to my Page";

//para1.innerText += "Welcome to DOM !";

/* const paras3 = document.querySelectorAll("p");
paras3.forEach((para) => {
  para.innerText += "+changed text";
}); */

//const divE = document.querySelector(".content");
//console.log(divE.innerHTML);
//divE.innerHTML += "<h2>This is a new h2 tag</h2>";

/* const people = ["mario", "luigi", "yoshi"];
people.forEach((person) => {
  divE.innerHTML += `<p>${person}</p>`;
}); */

const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://www.yahoo.com");
