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

  $(".tab-content").hide();
  $("#tab1").show();
  $("#pd").click(function(){
    $(".tab-content").hide();
    $('#tab1').show();
  });

  $("#size").click(function(){
    $(".tab-content").hide();
    $('#tab2').show();
  });

  $("#review").click(function(){
    $(".tab-content").hide();
    $('#tab3').show();
  });
});
