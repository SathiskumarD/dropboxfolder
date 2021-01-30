"use strict";
const switcher = document.querySelector(".btn");
switcher.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  console.log("current class name:" + className);
  var className = document.body.className;
  if (className == "light-theme") {
    this.textContent = "Dark";
  } else {
    this.textContent = "Light";
  }
});
