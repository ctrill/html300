
//code courtesy JQuery UI widget

//==================for DRAG AND DROP box ==================//

$(function() {
    $( "#draggable" ).draggable({ axis: "y" });
    $( "#draggable2" ).draggable({ axis: "x" });
 
    $( "#draggable3" ).draggable({ containment: "#drag_drop", scroll: false });
    $( "#draggable5" ).draggable({ containment: "parent" });
  });
  
  //==================for INPUT Table=======================//


//========checkbox===//

$('#chckbox').click(function () {
  if (this.checked == false) {
    
    $('.checkbox:checked').attr('checked', false);
    document.getElementById("chckbox_output").innerHTML = "False";
  }
    else {
      $('.checkbox:not(:checked)').attr('checked', true);
    document.getElementById("chckbox_output").innerHTML = "True";
  }
});
  
  
  
  
  
  
  