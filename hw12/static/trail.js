
var open1 = function () {
window.open("http://127.0.0.1:5000/", "_self");

}


var open2 = function(){
window.open("http://127.0.0.1:5000/2", "_self"); 

}

var open3 = function(){
window.open("http://127.0.0.1:5000/3", "_self");

}

var open4 = function(){
window.open("http://127.0.0.1:5000/4", "_self");

}

var open5 = function(){
window.open("http://127.0.0.1:5000/5", "_self");

}

var open6 = function(){
window.open("http://127.0.0.1:5000/6", "_self");

}

var open7 = function(){
window.open("http://127.0.0.1:5000/7", "_self");
}

var open8 = function(){
window.open("http://127.0.0.1:5000/8", "_self");


}

var open9 = function(){
window.open("http://127.0.0.1:5000/9", "_self");
}


var open10 = function () {
    var value = "Question 1 answered incorrectly: <a href='http://127.0.0.1:5000/selftest'> review paint blazes </a> "; 
    move_to_ppc(value); 
    window.open("http://127.0.0.1:5000/10", "_self");

}

var appendIt = function (value) {
    var value1 = value;
    console.log("inside appendIt");
    console.log(value1)
    $.each(value1, function (index, value) {
      console.log("inside each")
	  var text = value
        if (text != "") {
            $(".wrong").append(text)
            $(".wrong").append("<br>")
        }
    })

}

var move_to_ppc = function (value) {
    var value1 = value; 
    var data_to_save = { "wrong": value1 };
    console.log(data_to_save);

    $.ajax({
        type: "POST",
        url: "toppc",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data_to_save),
        success: function (result) {
            var all_ppc = result["ppc_people"]
            ppc_people = all_ppc
            console.log("ppc people in AJAX:" + ppc_people);
            appendIt(ppc_people);
  
        },
        error: function (request, status, error) {
            console.log("Error");
            console.log(request)
            console.log(status)
            console.log(error)
        }
    });
}




var openst = function(){
window.open("http://127.0.0.1:5000/selftest", "_self");

}

var open11 = function () {
window.open("http://127.0.0.1:5000/11", "_self");
}

var open12 = function(){
window.open("http://127.0.0.1:5000/12", "_self");

}

var open13 = function () {
    var value = "Question 2 answered incorrectly: <a href='http://127.0.0.1:5000/3'> review general blazes </a>";
    move_to_ppc(value); 
window.open("http://127.0.0.1:5000/13", "_self");

}

var open14 = function(){
window.open("http://127.0.0.1:5000/14", "_self");

}

var open15 = function(){
window.open("http://127.0.0.1:5000/15", "_self");

}

var open16 = function () {
    var value = "Question 3 answered incorrectly: <a href='http://127.0.0.1:5000/selftest'> review paint blazes </a> ";
    move_to_ppc(value); 
window.open("http://127.0.0.1:5000/16", "_self");

}

var open17 = function(){
window.open("http://127.0.0.1:5000/17", "_self");

}

var open18 = function(){
window.open("http://127.0.0.1:5000/18", "_self");

}

var open19 = function () {
    var value = "Question 4 answered incorrectly: <a href='http://127.0.0.1:5000/selftest'> review paint blazes </a> ";
    move_to_ppc(value); 
window.open("http://127.0.0.1:5000/19", "_self");

}                       

var open20 = function () {

window.open("http://127.0.0.1:5000/20", "_self");

}

var open21 = function(){
window.open("http://127.0.0.1:5000/21", "_self");

}

var open22 = function () {
    var value = "Question 8 answered incorrectly: <a href='http://127.0.0.1:5000/selftest'> review paint blazes </a> ";
    move_to_ppc(value); 
window.open("http://127.0.0.1:5000/22", "_self");

}

var open23 = function(){
    window.open("http://127.0.0.1:5000/23", "_self");

}

var open26 = function () {
    window.open("http://127.0.0.1:5000/26", "_self");

}

var open27 = function () {
    window.open("http://127.0.0.1:5000/27", "_self");

}

var open28 = function () {
    var value = "Question 5 answered incorrectly: <a href='http://127.0.0.1:5000/4'> review trail signs </a> ";
    move_to_ppc(value); 
    window.open("http://127.0.0.1:5000/28", "_self");

}

var open29 = function () {
    window.open("http://127.0.0.1:5000/29", "_self");

}

var open30 = function () {
    window.open("http://127.0.0.1:5000/30", "_self");

}

var open31 = function () {
    var value = "Question 6 answered incorrectly: <a href='http://127.0.0.1:5000/3'> review general blazes </a>";
    move_to_ppc(value); 
    window.open("http://127.0.0.1:5000/31", "_self");

}

var open32 = function () {
    window.open("http://127.0.0.1:5000/32", "_self");

}

var open33 = function () {
    window.open("http://127.0.0.1:5000/33", "_self");

}

var open34 = function () {
    var value = "Question 7 answered incorrectly: <a href='http://127.0.0.1:5000/4'> review trail signs </a> ";
    move_to_ppc(value); 
    window.open("http://127.0.0.1:5000/34", "_self");

}


$(document).ready(function () {
move_to_ppc("")
})




