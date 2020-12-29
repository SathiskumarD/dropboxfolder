/* let val1;
const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");
//val1 = listItem;
//val1 = list;
//Get child nodes
val1 = list.childNodes;
val2 = list.childNodes[0];
val3 = list.childNodes[0].nodeName;
val4 = list.childNodes[3].nodeType; //The value of 3 is obtained from childNodes list.
//child nodes gives us all different types of nodes not just elements
/* 1-Element
2-Attribute(deprecated)
3-Text Node
8-Comment
9-Document itself
10-DocType
 */

//Get children element nodes
//Childern gives only elements.So always use children
/* val5 = list.children;
val6 = list.children[1];
list.children[1].textContent = "Hello";
//Children of children
list.children[3].children[0].id = "test-link";
val7 = list.children[3].children[0];
//first-child
val8 = list.firstChild;
val9 = list.firstElementChild;
//last-child
val10 = list.lastChild;
val11 = list.lastElementChild;
//Count child elements
val12 = list.childElementCount;
//Get parent node
val13 = listItem.parentNode;
//or
val14 = listItem.parentElement;
val15 = list.parentElement.parentElement;
//get next Sibling
val16 = listItem.nextSibling;
val17 = listItem.nextElementSibling.nextElementSibling;
//get previous sibling
val18 = listItem.previousElementSibling;
val19 = listItem.previousSibling;
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
 */

let val;
const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");
val = listItem;
val = list;
//get child nodes
val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
//val = list.childNodes[0].nodeType;
/* 1-Element
2-Attribute(deprecated)
3-Text Node
8-Comment
9-Document itself
10-DocType
 */
// val = list.childNodes[3].nodeType;
//get children element nodes
//val = list.children;

console.log(val);
