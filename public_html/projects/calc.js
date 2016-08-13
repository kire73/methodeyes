var html = "";
var adding = "";
var result = 0;
var whichp = ")";

function calculate(str) {
  console.log(str);
}

$("#equal").on("click", function(pressed) {
  result = eval(html);
  $("#res").html(result)
})
$("#par").on("click", function(pressed) {
  if (whichp == ")") {
    adding = "(";
    whichp = "("
  } else if (whichp = "(") {
    adding = ")";
    whichp = ")";
  }
  html += adding;
  $("#con").html(html)
})
$("#C").on("click", function(pressed) {
  html = html.split("");
  html.pop();
  html = html.join("");
  $("#con").html(html)
})
$("#AC").on("click", function(pressed) {
  html = "";
  $("#con").html(html)
})
$("#multiply").on("click", function(pressed) {
  adding = "*";
  html += adding;
  $("#con").html(html)
})
$("#divide").on("click", function(pressed) {
  adding = "/";
  html += adding;
  $("#con").html(html)
})
$("#1").on("click", function(pressed) {
  adding = "1";
  html += adding;
  $("#con").html(html)
})
$("#2").on("click", function(pressed) {
  adding = "2";
  html += adding;
  $("#con").html(html)
})
$("#3").on("click", function(pressed) {
  adding = "3";
  html += adding;
  $("#con").html(html)
})
$("#4").on("click", function(pressed) {
  adding = "4";
  html += adding;
  $("#con").html(html)
})
$("#5").on("click", function(pressed) {
  adding = "5";
  html += adding;
  $("#con").html(html)
})
$("#6").on("click", function(pressed) {
  adding = "6";
  html += adding;
  $("#con").html(html)
})
$("#7").on("click", function(pressed) {
  adding = "7";
  html += adding;
  $("#con").html(html)
})
$("#8").on("click", function(pressed) {
  adding = "8";
  html += adding;
  $("#con").html(html)
})
$("#9").on("click", function(pressed) {
  adding = "9";
  html += adding;
  $("#con").html(html)
})
$("#0").on("click", function(pressed) {
  adding = "0";
  html += adding;
  $("#con").html(html)
})
$("#minus").on("click", function(pressed) {
  adding = "-";
  html += adding;
  $("#con").html(html)
})
$("#plus").on("click", function(pressed) {
  adding = "+";
  html += adding;
  $("#con").html(html)
})
$("#dot").on("click", function(pressed) {
  adding = ".";
  html += adding;
  $("#con").html(html)
})
$("#mod").on("click", function(pressed) {
  adding = "%";
  html += adding;
  $("#con").html(html)
})