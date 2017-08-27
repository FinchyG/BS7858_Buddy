// first question js

$("#YB").click(function(){
  $(".L2, .L3").hide();
  $("#YD").show();
});

$("#NB").click(function(){
  $(".L2, .L3").hide();
  $("#ND").show();
});

// second question after "yes" answer js

$("#YYB").click(function(){
  $("#YYD").show();
  $("#NYD").hide();
});

$("#NYB").click(function(){
  $("#NYD").show();
  $("#YYD").hide();
});

// second question after "no" answer

$("#YNB").click(function(){
  $("#YND").show();
  $("NND").hide();
});

$("#NNB").click(function(){
  $("#NND").show();
  $("#YND").hide();
});