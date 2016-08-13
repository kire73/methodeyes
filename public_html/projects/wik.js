 var input;

 function othername(input) {

   return input;
 }
 console.log(input);

 $("#wik").on("click", function othername(input) {
   input = document.getElementById("userInput").value;
   var con;
   
   $.ajax( " https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input + "&limit=100&format=json", {
    dataType: "jsonp"
  })

    .done(function( data ) {
     con = data;
     var html = "<h1>" + con[0] + "</h1>";
console.log(con)
     for (var i = 0; i < con[1].length; i++) {
       html += "<br><a target='_blank' href='" + con[3][i] + "'><div id='box'><h2>" + con[1][i] + "</h2></a><br><h3>" + con[2][i] + "</h3></div>";
     }
     $(".stuff").html(html);
   });
 });