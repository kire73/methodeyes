var startTime;
var timePassed;
var html;
var breaktime = 5;
var timerlength = 25;
var timermil = 25*60*1000;
var breakmil = 5*60*1000;
var stop;
var interval = 0;

function done(){
  stop = true;
}

function newlength(input) {
   return input;
 }

function setSession(newlength) {
  newlength = document.getElementById("setL").value;
  timerlength = newlength;
  timermil = (newlength*60*1000);
  $("#curS").html(timerlength);
}

function setBreak(newlength) {
  newlength = document.getElementById("setB").value;
  breaktime = newlength;
  breakmil = (newlength*60*1000);
  $("#curB").html(breaktime);
}
function setInterval() {
  timePassed = new Date().getTime() - startTime;
    html = "Time Left: <br>" + realtime(timermil - timePassed);
  $("#show").html(html);
  if (stop == true) {
    $("#disp").css("background-color", "red");
    html = "Stopped";
    $("#show").html(html);
  } else if (timePassed >= timermil && breakmil >= (timePassed - timermil)) {
      html = "Break Time! <br>" + realtime(breakmil + timermil - timePassed);
      $("#disp").css("background-color", "orange");
      $("#show").html(html);
    mytime = setTimeout(setInterval, 1);
  } else if(timePassed >= breakmil + timermil){ 
      html = "Finished! <br>" + realtime(breakmil + timermil - timePassed);
      $("#disp").css("background-color", "red");
      $("#show").html(html);
    } else mytime = setTimeout(setInterval, 1);
}

function realtime(count) {
    var mil = parseInt((count%1000)/100);
    var s = parseInt((count/1000)%60);
    var m = parseInt((count/(1000*60))%60);
    var h = parseInt((count/(1000*60*60))%24);

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    return m  + ":" +  s + "." + mil;
}


$("#start").on("click", function startTimer() {
  stop = false;
  startTime = new Date().getTime();
  html = "BEGIN!";
  $("#disp").css("background-color","springgreen")
  $("#show").html(html);
  mytime = setTimeout(setInterval, 1);
});

$("#upS").on("click", setSession);

$("#upB").on("click", setBreak);

$("#stop").on("click", done);

