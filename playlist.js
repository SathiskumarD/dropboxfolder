window.onload=init;
function init(){
var button = document.getElementById("addBUtton");
button.onclick = handleButtonClick;
}
function handleButtonClick(){
    alert("Button was clicked")
}