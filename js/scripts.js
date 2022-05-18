$(document).ready(function () {
  $("#form-control").submit(function (e) {
    e.preventDefault();

    let input1 = $("#carrot").val().toUpperCase()
    let input2 = $("#milk").val().toUpperCase()
    let input3 = $("#Tomatoes").val().toUpperCase()
    let input4 = $("#Eggs").val().toUpperCase()
    let input5 = $("#Apples").val().toUpperCase()
    let input6 = $("#onions").val().toUpperCase()

    let newArray = [input1, input2, input3, input4, input5, input6];
    let newArray1 = newArray.sort();

    $("#form-control").hide();

    newArray1.forEach(function (list){
      $("#output").append("<li>".concat(list,""));
    })


  });







});