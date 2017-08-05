window.addEventListener("load", function() {
	var counter = document.getElementById("counter");
	var days = counter.childNodes[1]; 
	var hours = counter.childNodes[2]; 
	var minutes = counter.childNodes[3]; 
	var seconds = counter.childNodes[4]; 
	var targetDate = new Date("2018-06-15");
	setInterval(function() {
		var timespan = (targetDate.getTime() - Date.now()) / 1000;
		days.setAttribute("data-content", Math.floor(timespan / (24*60*60)));
		hours.setAttribute("data-content", Math.floor(timespan / (60*60) % 24));
		minutes.setAttribute("data-content", Math.floor(timespan / 60 % 60));
		seconds.setAttribute("data-content", Math.floor(timespan % 60));
	}, 1000);
}, false);
