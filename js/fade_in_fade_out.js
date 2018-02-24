function show_event_decription(id){
  var $selected_ID = $('#event_' + id);
  var event_count = 0;
  var total_events = 15;
  for(a = 1; a<=total_events; a++){
    if ($('#event_' + a).is(":not(':hidden')")) {
      //if there is at least one ID visible
      event_count += 1;
    }
  }
  //If the selected ID is visible and it's the only one visible, fade the ID out
    if ($selected_ID.is(":not(':hidden')") & event_count == 1) {
        $selected_ID.fadeOut();
        $('#event_' + id + "_date").fadeOut("slow");
        $('#event_' + id + "_desc").fadeOut("slow");
    }
  //If the selected ID is visible and it's not the only one visible, fade all of them out
    if ($selected_ID.is(":not(':hidden')") & event_count > 1){
      for(b = 1; b<=total_events; b++){
        $('#event_' + b).fadeOut();
        $('#event_' + b + "_date").fadeOut("slow");
        $('#event_' + b + "_desc").fadeOut("slow");
      }
    }
  //If the selected ID is hidden and no other event are visible, fade the ID in
      if ($selected_ID.is(':hidden') & event_count == 0) {
          $selected_ID.fadeIn();
          $('#event_' + id + "_date").fadeIn("slow");
          $('#event_' + id + "_desc").fadeIn("slow");
      }
  //If the selected ID is hidden and there are other events visible, fade the ID in, fade the other ID out
      if ($selected_ID.is(':hidden') & event_count > 0) {
          $selected_ID.fadeIn();
          $('#event_' + id + "_date").fadeIn("slow");
          $('#event_' + id + "_desc").fadeIn("slow");
          for(c = 1; c<=total_events; c++){
            if(c != id){
              $('#event_' + c).fadeOut();
              $('#event_' + c + "_date").fadeOut("slow");
              $('#event_' + c + "_desc").fadeOut("slow");
            }
          }
      }
}

function moveCar(id){
  <!--get current position of the car-->
  var carpos = $('#animate').position();
  var carpositionleft = carpos.left;
  console.log( "carpositionleft: " + carpositionleft);

  <!--get clicked button position-->
  var p = $( '#event_no_' + id );
  var pos = p.position();
  var clickedposleft= pos.left - 35;
  <!--the paragraph has been set to have left padding of 71 px after reaching width of 472 px. Hence, need to fix the new paragraph position-->
  if(clickedposleft > 472){
    clickedposleft += 71;
  }
  console.log( "clickedposleft: " + clickedposleft);

  var elem = document.getElementById("animate");
  var animationtime = setInterval(frame, 3);

    function frame() {
      var diff = Math.abs(carpositionleft - clickedposleft);
      if (diff <= 1) {
        clearInterval(animationtime);
      } else if(clickedposleft < carpositionleft){
        carpositionleft--;
        elem.style.left = carpositionleft + 'px';
      } else if(clickedposleft > carpositionleft){
        carpositionleft++;
        elem.style.left = carpositionleft + 'px';
      }
    }
}
