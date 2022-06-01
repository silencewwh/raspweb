$(document).ready(function(){
    $("#A5").mouseenter(function(){
      console.log("1")
    });
  });
window.setInterval(ut, 1000);

function ut() {
  var d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
  document.getElementById("date").innerHTML = d.toLocaleDateString();
}