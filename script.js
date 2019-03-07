$(".btn3").click(function(){ //enable click function so when clicked it will work

var a = parseInt ($(".yo").val());//switches string to number, and declares variable
var b = parseInt ($(".need").val());//declares variable for input class and the value
var c= $(".sure").val();//declares variable for input class and the value
var d=a+b;//declares function for the three functions
    $(".result").text("In the future "+c+" you will have "+d+" dollars");// declares sentence for the end of fortune teller
});
