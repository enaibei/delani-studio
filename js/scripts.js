$(document).ready(function(){
    $(".flip").click(function(){
        $(".panel").slideToggle();
    })
})
$(document).ready(function(){
    $(".flip2").click(function(){
        $(".panel2").slideToggle();
    })
})
$(document).ready(function(){
    $(".flip3").click(function(){
        $(".panel3").slideToggle();
    })
})


$(document).ready(function(){
    $("#work1").mouseover(function(){
        $("#portfolio1").show();
    }).mouseout(function(){
      $("#portfolio1").hide();
    });
  });
  $(document).ready(function(){
    $("#work2").mouseover(function(){
      $("#portfolio2").show();
    }).mouseout(function(){
      $("#portfolio2").hide();
    });
  });
  $(document).ready(function(){
    $("#work3").mouseover(function(){
      $("#portfolio3").show();
    }).mouseout(function(){
      $("#portfolio3").hide();
    });
  });
  $(document).ready(function(){
    $("#work4").mouseover(function(){
      $("#portfolio4").show();
    }).mouseout(function(){
      $("#portfolio4").hide();
    });
  });
  
  $(document).ready(function(){
    $("#work5").mouseover(function(){
      $("#portfolio5").show();
    }).mouseout(function(){
      $("#portfolio5").hide();
    });
    $("#work6").mouseover(function(){
      $("#portfolio6").show();
    }).mouseout(function(){
      $("#portfolio6").hide();
    });
    $("#work7").mouseover(function(){
      $("#portfolio7").show();
    }).mouseout(function(){
      $("#portfolio7").hide();
    });
    $("#work8").mouseover(function(){
      $("#portfolio8").show();
    }).mouseout(function(){
      $("#portfolio8").hide();
    });
  });

  $(document).ready(function(){
    $("client-input").submit(function(event){
      var name = $("input#name-input").val();
      var email = $("input#email-input").val();
      var message = $("textarea#message").val();
      if ($("input#name-input").val() && $("input#email-input").val()){
        alert ("Hello " + name + ", we have received your message. Thank you for contacting us, we shall get back to you.");
      }
      else {
        alert("Please enter your name and email address");
      }
      
    });
  
  });
  