var counter = function() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  
  if (hours.toString().length < 2) {
  hours = "0" + hours;
}
  if (minutes.toString().length < 2) {
  minutes = "0" + minutes;
}
  if (seconds.toString().length < 2) {
  seconds = "0" + seconds;
}
 
  var colorCode = "#"+ hours + "" + minutes + "" + seconds;
  
  $("body")
    .css("background-color", colorCode);
  
  $("span")
    .text("#"+ hours + "" + minutes + "" + seconds)
    .css("background-color", colorCode);
  
}

$(function(){
  
  counter();
  
  var intID = setInterval(counter, 1000);
  
});