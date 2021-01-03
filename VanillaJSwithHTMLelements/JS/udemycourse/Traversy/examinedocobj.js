let val;

val = document;
val = document.all; //document.all is deprecated and not used by browsers anymore isnce introduction of HTML5
val = document.all[2];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;
//forms
val = document.forms;
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].method;
val = document.forms[0].action;
//links
val = document.links;
val = document.links[0];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList[0];

val = document.images;

val = document.scripts;
val = document.scripts[2].getAttribute("src");

let scripts = document.scripts;

let scriptsArr = Array.from(scripts); //This step is to convert scripts to an Array ! Important

scriptsArr.forEach(function (script) {
  console.log(script.getAttribute("src"));
});

console.log(val);
