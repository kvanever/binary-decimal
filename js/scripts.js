/*This file is for your custom js.  All yours*/
//front-end

$(function () {
  $("form").submit(function(event) {
    event.preventDefault();
    debugger;
    var input = ($("input#binary-input").val());
    // if (!isBinary(input) === true) {
    //   alert("Please enter a positive binary integer");
    //   $("input").addClass("has-error");
    // }
    // else {
      var output = binaryToDecimal(input);
    // }
    $(".output").text(output);
  })
})

//business logic

var isBinary = function(integer) {
  return (/^[-e23456789]$/i).test(integer);
}

var binaryToDecimal = function(integer) {
  debugger;
  var array = integer.split('');
  var decimal = 0;
  var reverseArray = array.reverse();
  for (i = 0; i < reverseArray.length; i++) {
    reverseArray[i] = parseInt(reverseArray[i]);
    if (reverseArray[i]) {
      decimal += Math.pow(2, i)
    }
  }
  return decimal;
}
