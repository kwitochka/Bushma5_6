start.addEventListener('click', startTimer);
pause.addEventListener("click", pauseTimer);
clear.addEventListener("click", clearTimer);

var count=0, timerId, go = false;

var newBut = start.oncklick; 

function startTimer() {
	console.log("start");
    if (go == false) {
    	timerId = setInterval(function(){
    		count+=10;
    		var msek = count%1000;

    		if (msek<10) {
    			msek="00" + msek;
    		}

    		if (msek < 100) {
    			msek="0" + msek;
    		}

    		else {
    			msek = "" + msek;
    		}

    		if (msek )

    		var sek = Math.floor(count/1000)%60;
    		if (sek<10) {
    			sek = "0"+sek;
    		}
    		
    		var min = Math.floor(count/60000)%60;
    		if (min<10) {
    			min = "0" + min;
    		}

    		var hours = Math.floor(count/360000)%24;
    		if (hours<10) {
    			hours = "0" + hours;
    		}

    		document.getElementById('timer').innerHTML = hours +":"+ min +":" + sek + "." + msek;
    		}, 10);
    	go = true;
}  
}


function pauseTimer(){
	console.log("reset");
	go = true;
	clearInterval(timerId);
}

function clearTimer(){
	console.log("stop");
	clearInterval(timerId);
	document.getElementById("timer").innerHTML = "00:00:00.000";
	go=false;
}
