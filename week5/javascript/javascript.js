
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
  

//displayAllINputValues( );

//$('input, textarea, select').on( 'change', displayNewValue);

//function displayAllINputValues( ) {


}

//define variables - what you're trying to pass through - typically global variables
//define event handlers - what the event is - uses $(' using the damn variables or whatever) and it shows what are you trying to fucking do!  You can put local variables here and pass through as a parameter in the function i.e use of ()
//define function? - this explains to the browser how to do it


  
  
  
  
  
  
  