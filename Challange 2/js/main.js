var offSet = 0;

function showDate() {
    var date = new Date(Date.now() + offSet * 3600000);
    var day = date.getDate(); 
    var month = date.getMonth() +1; 
    var year = date.getFullYear();

    	day = (day < 10) ? "0" + day : day;
    	month = (month < 10) ? "0" + month : month;

    var fullDate = day + "/" + month + "/" + year;
    document.getElementById("date").innerHTML = fullDate;
}

function showTime() {
    var date = new Date(Date.now() + offSet * 3600000);
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    	h = (h < 10) ? "0" + h : h;
    	m = (m < 10) ? "0" + m : m;
    	s = (s < 10) ? "0" + s : s;
        
    var time = h + ":" + m + ":" + s ;
    document.getElementById("main").innerHTML = time;
    background();
    setTimeout(showTime, 1000);
}

function background() {
    var now = new Date(Date.now() + offSet * 3600000);
    var hours = now.getHours();
    const styles = {
        backgroundPosition: 'center center', 
        backgroundRepeat: 'no-repeat'
}

//morning 5-11
    if (hours >4 && hours <= 10){
        gsap.to('body', 1, {backgroundImage: 'url(image/morning.jpeg)', ...styles
    });
}
//day 11-18
    else if (hours > 10 && hours <= 17){
        console.log('hours', hours)
        gsap.to('body', 1, {backgroundImage: 'url(image/day.jpeg)', ...styles
	});
}
//night 18-5
    else {
        gsap.to('body', 1, {backgroundImage: 'url(image/night.jpeg)', ...styles
    });
}}

window.onload = function () {
    showTime();
    showDate();
    background();
};

