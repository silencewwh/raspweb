(function() {
$(document).ready(function(){
    $("section").click(function(event){
    var checked=$('#check').is(':checked');
    if(checked){
    $('#check').removeAttr('checked');
}})
  
  $(".background").click(function(event){
  var checked=$('#check').is(':checked');
  if(checked){
  $('#check').removeAttr('checked');
}})})
 


}
)();