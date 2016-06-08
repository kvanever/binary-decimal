/*This file is for your custom js.  All yours*/
//front-end

$(function () {
  $("form.binary-form").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("input#binary-input").val());
  })
})
