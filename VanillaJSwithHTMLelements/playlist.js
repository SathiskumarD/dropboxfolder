window.onload = init;

function init() {
    document.getElementById("addButton").onclick = handleButtonClick;
    loadPlaylist();
}

function handleButtonClick() {
    var textInput = document.getElementById("songTextInput");
    //var songName = textInput.value;

    if (textInput.value == "") {
        alert("please enter a song")
    } else {
        alert("Adding  " + textInput.value);
    }

    var li = document.createElement("li");
    var ul = document.getElementById("playlist");
    li.innerHTML = textInput.value;
    ul.appendChild(li);
    save(songname);

}