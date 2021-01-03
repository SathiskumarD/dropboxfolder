function getTimeFromString(timeString) {
    var theTime = new Date();
    var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
    theTime.setMinutes(parseInt(time[2]) || 0);
    return theTime.getTime();
}

function getTimeFromString(timeString) {
    var theTime = new Date();
    var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
    theTime.setHours(parseInt(time[1]) + (time[3] ? 12 : 0));
    theTime.setMinutes(parseInt(time[2]) || 0);
    return theTime.getTime();
}

function Movie(title, genre, rating, showtimes) {
    this.title = title;
    this.genre = genre;
    this.rating = rating;
    this.showtimes = showtimes;
    this.getNextShowing = function () {
        var now = new Date().getTime();
        for (var i = 0; i < this.showtimes.length; i++) {
            var showtime = getTimeFromString(this.showtimes[i]);
            if ((showtime - now) > 0) {
                return " Next showing of " + this.title + "is" + this.showtimes[i];
            }
        }
    };
}



var sherlockHolmes = new Movie("SH", "Spy-thriller", 4.1, ["10:00am", "12:30pm", "3:30pm", "5.30pm", "8.00pm"]);
sherlockHolmes.getNextShowing();


// var sherlockHolmes = new Movie("SH", "Spy-thriller", 4.1, ["10:00am", "12:30pm", "3:30pm", "5.30pm", "8.00pm"]);
// alert(sherlockHolmes.getNextShowing());