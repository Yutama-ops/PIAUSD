function show_event_decription(id){
  var $selected_ID = $('#event_' + id);
  var event_count = 0;
  for(a = 1; a<=8; a++){
    if ($('#event_' + a).is(":not(':hidden')")) {
      //if there is at least one ID visible
      event_count += 1;
    }
  }
  //If the selected ID is visible and it's the only one visible, fade the ID out
    if ($selected_ID.is(":not(':hidden')") & event_count == 1) {
        $selected_ID.fadeOut();
        $('#event_' + id + "_desc").fadeOut("slow");
        Console.log("masuk 1");
    }
  //If the selected ID is visible and it's not the only one visible, fade all of them out
    if ($selected_ID.is(":not(':hidden')") & event_count > 1){
      for(b = 1; b<=8; b++){
        $('#event_' + b).fadeOut();
        $('#event_' + b + "_desc").fadeOut("slow");
        Console.log("masuk 2");
      }
    }
  //If the selected ID is hidden and no other event are visible, fade the ID in
      if ($selected_ID.is(':hidden') & event_count == 0) {
          $selected_ID.fadeIn();
          $('#event_' + id + "_desc").fadeIn("slow");
          Console.log("masuk 3");
      }
  //If the selected ID is hidden and there are other events visible, fade the ID in, fade the other ID out
      if ($selected_ID.is(':hidden') & event_count > 0) {
          $selected_ID.fadeIn();
          $('#event_' + id + "_desc").fadeIn("slow");
          for(c = 1; c<=8; c++){
            if(c != id){
              $('#event_' + c).fadeOut();
              $('#event_' + c + "_desc").fadeOut("slow");
            }
          }
          Console.log("masuk 4");
      }
}
