const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Apr 04, 2020 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

let ctText = Math.floor(distance / (day));
/*+
				Math.floor(distance / (day))+"."+
				Math.floor(distance % (day)/hour)+"."+
				Math.floor(distance % (hour)/minute)+"."+
				Math.floor(distance % (minute)/second);*/
      document.getElementById('days').innerText = ctText;
      
      //do something later when date is reached
      if (distance < 0) {
document.getElementById('ctd').style.display='none';
      }

    }, second)