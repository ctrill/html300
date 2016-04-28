(function() {
'use strict';
//=============================================================================
  
//  //courtesy StackOverflow
//function findWord() {
//    var outputDiv = $('#output');
//    var searchText = $('#user-input').val();
//    var wordMatch = $('#match').val().toLowerCase();
//
//    if (wordMatch == '') {
//        alert('Please enter a word!');
//        return;
//    }
//    outputDiv.empty();
//
//    // Simple method: matches also partials ('fox' in 'foxy')
//    var m = searchText.match(new RegExp(wordMatch.toString().replace(/(?=[.\\+*?[^\]$(){}\|])/g, "\\"), "ig"));
//    outputDiv.append('#output' + (m ? m.length : 0) + ' partial matches');
//
//    // Advanced method: matched only full words.
//    // This one first splits the string in words, and then loops 
//    // through all of them (potentially slow with very longs texts)
//    var count = 0;
//    var words = searchText.split(' ');
//    for (x in words) {
//        if (words[x].toLowerCase() == wordMatch) {
//            count++;
//        }
//    }
//    outputDiv.append('#output' + count + ' full word matches');
//}
//  
//function countString(str, search){
//    var count=0;
//    var index=str.indexOf(search);
//    while(index!=-1){
//        count++;
//        index=str.indexOf(search,index+1);
//    }
//    return count;
})
  
//
//$(document).ready(function()
//{
//    var wordCounts = {};
//    $("#user_input").keyup(function() {
//        var matches = this.value.match(/\b/g);
//        wordCounts[this.id] = matches ? matches.length / 2 : 0;
//        var finalCount = 0;
//        $.each(wordCounts, function(k, v) {
//            finalCount += v;
//        });
//        $('#display_count').html(finalCount);
//        am_cal(finalCount);
//    }).keyup();
// }); 
  
//  
//  
//function update_textarea(obj)
//{
//    $('#message').text($(obj).attr('value')); //whatever you type in the textarea should be reflected in #message div
//}
//  
//function addContent(divName, content) {
//     document.getElementById(divName).innerHTML = content;
//}
//   
//  
//$('#message').val();
//  
//var new_textarea_value = 'New value';
//
//$('#message').val(new_textarea_value);
//  
//var textarea_length = $('#message').val().length;
//   
  
//  
//sumjq = function(selector) {
//    var sum = 0;
//    $(selector).each(function() {
//        sum += Number($(this).text());
//    });
//    return sum;
//}
//
//console.log(sumjq('.price'));
//  
//  
  
//
//  isNAN() //checks if its a number
//  
//  function validateTypes(el)  {
//    if (!el.value) return true;
//    
//    var type = $(el).data('type') || el.getAttribute('type');
//    if (typeof validateType[type] === 'function') {
//    
//      return validateType[type](el);
//    }
//    else {
//      return true;
//          
//    }
//    
//  }
//  
//  var validateType = {
//   number: function(el) {
//     
//   }
//    
//  }
//  
//  var message = document.getElementById("user_input").value;
//  
//  var msg = "<h2>Words</h2><p>' + saying.length + '<p>';
//  msg +=
//  
//  
//  
//  
//   function showInput() {
//        var input_entered =  document.getElementById("user_input").value;
//        document.getElementById('message').innerHTML = input_entered;
//        }
//  
//   function showInput(){
//            //parseInt around the number or it will be seen as a string instead of a number
//            var input_entered = parseInt(document.getElementById("user_input").value);
//            var output = "";
//                                          
//            numberOf += 1;
//            sum += number_entered;
//            average = sum/numberOf;
//                                          
//            output += '<p> Numbers Chosen: </p>';
//            output += numberOf;                          
//            output += '<p> Your Total: </p>';
//            output += sum;
//            output += '<p> Average: </p>';
//            output += average;
//                                          
//            results.innerHTML = output;                                  
//          }
//  
//  var resetButton = document.getElementById("reset");
//  
//  resetButton.addEventListener("click", reset, false);
//         
//  function reset(evt) {
//      document.getElementById("user_input").reset();
//              results.innerHTML = "";
//          }