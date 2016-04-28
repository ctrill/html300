//
//(function() {
//  'use strict';
//  
//  var items = [];
//  displayItems ( );
//  
//  $('#new-item').on( 'click', addNewItem );
//  
//  function displayItems( ){

//    var i, len, item;
//    var tr, td;
//    
//    $('#items').empty();
//    
//    for ( i = 0, len = items.length; i < len; ++i )
//      items = items[ i ];
//    
//      tr = $( '<tr>');
//    
//      td = $('<td>');
//      td.text(item.name );
//    tr.append(td);
//    
//    td = $('<td>');
//    td.text(item.age);
//    tr.append(td);
//    
//    $('#items').append(tr);
//  }
//  
//  $('#table-page').show();
//  $('#form-page').hide();      
//      
//    
//    //=====================================  
//      
//      function.addNewItem( ) {
//        $('#name').val( '' );
//        $('#age').eval( '' );
//        
//        $('#submit').one( 'click', addItem );  // .one only happens ONCE - then turns off.  .on happens every time!!!
//        $('$cancel').one( 'click', displayItems );
//        
//        $('#table-page').hide();
//        $('form-page').show();
//        
//    //=======================================
//        
//        function addItem(evt) {
//          var newItem = {
//            name: $('#name').val(),
//            age: $('#age').val()
//          };
//          items.push( newItem );
//          
//          evt.preventDefault();
//          
//          displayItems( );
//        }
//        
//    }
//  }
//}
//

var button = document.querySelector("button");
button.addEventListener("click", function(){
  console.log("button clicked.");
});

//============================================================


//create an array
var dataList = new Array;

//create an array dynamically
var output = "";
//this for loop builds the array
for (var i = 0; i < 25; i++ ){
	dataList[i] = i + 1;
}

//this for loop displays the data and checks for null values
for (var i = 0; i < dataList.length; i++ ){
	//check for null value first
	if(dataList[i] != null){
		output += '<td + dataList[i] />';
	}
}


function AddData() {
    var x = document.getElementById("l-name-label").value;
    var y = document.getElementById("f-name-label").value;
    var letters = '/^[a-zA-Z]+$/';
    if ((parseInt(x) != (x)) && (y == parseInt(y))) {
        alert("Wrong Value Entered");
    } else {
        var rows = "";
        var name = document.getElementById("f-name-label").value;
        var lastName = document.getElementById("l-name-label").value;
        var email = document.getElementById("email").value;

        rows += "<tr><td>" + name + "</td><td>" + lastName + "</td><td>" + email + "</td></tr>";
        var tbody = document.querySelector("#list tbody");
        var tr = document.createElement("tr");
      
        tr.innerHTML = rows;
        tbody.appendChild(tr)
        
    }
  }
//
  function ResetForm(){
    document.getElementById("basic").reset();
  }

////
//
////partial courtesy to stackoverflow user Qantas 94 Heavy
//
//function displayTable(alpha) {
//  // get the table to add rows to
//  var table = document.getElementById('alpha');
//
//  // cycle through the array for each of the presidents
//  for (var i = 0; i < dataList.length; ++i) {
//    // keep a reference to an individual president object
//    var alpha = alpha[i];
//
//    // create a row element to append cells to
//    var row = document.createElement('tr');
//
//    // properties of the array elements
//    var properties = ['First Name', 'Last Name', 'E-mail Contact'];
//
//    // append each one of them to the row in question, in order
//    for (var j = 0; j < properties.length; ++j) {
//      // create new data cell for names
//      var cell = document.createElement('td');
//
//      // set name of property using bracket notation (properties[j] is a string,
//      // which can be used to access properties of president)
//      cell.innerHTML = alpha[properties[j]];
//
//      // add to end of the row
//      row.appendChild(cell);
//    }
//
//    // add new row to table
//    table.appendChild(row);
//  }
//}
//


//
////create the buildTable function
//function buildTable()
//{
//	var alphaDiv = document.getElementById("alpha");
//	
//	//create an output variable
//	var output = "";
//	output += '';
//		
//	
//	for(i in dataList)
//	{
//		//concantenation assignment operator..
//		output += '<tr + '" <td>/tr>';
//		output += "< >"; 
//		output += "< >";
//		output += '</>';
//		output += '< >'; 
//	}
//	
//	
//	output += '</div>';
//	output += '<div class="thumbs_block">  ';
//	for(var j=0; j < imageListB.length; j++)
//	{
//		//concatenation assignment operator..
//		output += '<img src="' + imageListB[j] + '" />';
//	}
//	output += '</div>';
//	output += '<div class="thumbs_block">  ';
//// 	
//	for(var k=0; k < imageListC.length; k++)
//	{
//		//concatenation assignment operator..
//		output += '<>';
//	}
//	output += '</div>';
//	
//	alphaDiv.innerHTML = output;
//}
//
//window.onload = function()
//{
//	buildTable();//use or "fire off" this function
//	//or invoke the function
//};
