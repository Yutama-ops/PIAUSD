$(function(){
    $('#progress_button_1').click(function(){
        var $element = $('#event_1');
          if ($element.is(":not(':hidden')")) {
            $("#event_1").fadeOut();
            $("#event_1_desc").fadeOut("slow");
          }else{
            $("#event_1").fadeIn();
            $("#event_1_desc").fadeIn("slow");
          }
    });
    $('#progress_button_2').click(function(){
        $("#event_2").fadeIn();
        $("#event_2_desc").fadeIn("slow");
    });
    $('#progress_button_3').click(function(){
        $("#event_3").fadeIn();
        $("#event_3_desc").fadeIn("slow");
    });
    $('#progress_button_4').click(function(){
        $("#event_4").fadeIn();
        $("#event_4_desc").fadeIn("slow");
    });
    $('#progress_button_5').click(function(){
        $("#event_5").fadeIn();
        $("#event_5_desc").fadeIn("slow");
    });
    $('#progress_button_6').click(function(){
        $("#event_6").fadeIn();
        $("#event_6_desc").fadeIn("slow");
    });
    $('#progress_button_7').click(function(){
        $("#event_7").fadeIn();
        $("#event_7_desc").fadeIn("slow");
    });
    $('#progress_button_8').click(function(){
        $("#event_8").fadeIn();
        $("#event_8_desc").fadeIn("slow");
    });
});
