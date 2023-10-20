    var daysofweek = ['sun', 'mon', 'tus', 'wed', 'thu', 'fri', 'sat'];
    var mounth = ['JAN', 'FEB', 'MAR', 'APR', 'MEY', 'JUN', 'JUl', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

    function oclock() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var day = h<11 ? "AM" : "PM";
        var daytoday = today.getDay()
        var date = today.getDay();
        var month = today.getMonth();
        var year = today.getFullYear();

    h = h < 10 ? '0' : h;
    m = m < 10 ? '0' : m;
    s = s < 10 ? '0' : s;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    document.getElementById('time').innerHTML = day;
    document.getElementById(daysofweek[daytoday]).style.color = "#fff";
    document.getElementById('day').innerHTML = date;
    document.getElementById('month').innerHTML = month[mon];
    document.getElementById('year').innerHTML = year;


    var inter = setInterval(oclock, 400);
}
oclock();
