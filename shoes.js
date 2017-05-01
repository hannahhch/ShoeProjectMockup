$(document).ready(function(){
  $("#buy").click(function(){
    $("#buy").text("ADDED TO CART!");
    });

  $("#buy").mouseleave(function(){
    $("#buy").text("BUY NOW!");
    });

  $("#buy").click(function(){
    $("#number").html(Number($("#number").html())+1);

  });
});
