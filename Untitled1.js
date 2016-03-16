// JavaScript File

var colors=["blue","red","yellow","green","purple","pink"];
var colorIndex=0




$(document).ready(function() {
    $("#bc").click(makePageChange);
    for (var i=0; i <colors.length;i=i+1) {
        $("#nameofcolor").append("<li>" + colors[i] + "</li>")
        console.log(colors[i]);
    }
});
function makePageChange() {
    $("body").css("background-color",colors[colorIndex]);
    colorIndex=colorIndex +1
    if (colorIndex>=colors.length){
        colorIndex=0
    }
}


