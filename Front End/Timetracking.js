document.addEventListener("DOMContentLoaded", function(){
    var currentTime = new Date();

    var hours = currentTime.getHours().toString().padStart(2, '0');
    var minutes = currentTime.getMinutes().toString().padStart(2, '0');
    var currentTimeString = hours + ':' + minutes;

    document.getElementById("time-in").value = currentTimeString;

    var eightHoursLater = new Date(currentTime.getTime() +  8 * 60 * 60 * 1000 );
    var hoursOut = eightHoursLater.getHours().toString().padStart(2, '0');
    var minutesOut = eightHoursLater.getHours().toString().padStart(2, '0');
    var eightHoursLaterString = hoursOut + ':' + minutesOut;
    document.getElementById("time-out").value = eightHoursLaterString;

})