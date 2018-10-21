function compute_BMI(x,y){
  var z = 0;
  x = parseInt(x);
  y = parseInt(y);
  a = x / 100;
  b = a * a
  z = y / b;
  return z;
}

function ask_for_BMI(){
  var x = document.getElementById("myForm").elements[0].value;
  var y = document.getElementById("myForm").elements[1].value;
  var z = compute_BMI(x,y);
  var x = document.getElementById("demo");
  x.style.fontSize = "25px";
  x.style.color = "#EA5455";
  document.getElementById("demo").innerHTML = "Your current BMI is " + z;
}

function display_alert1(){
  alert("Great! This web can be your health detector!")
}

function display_alert2(){
  alert("Really? This web can be your health detector!")
}

$(document).ready(function(){
   $("button#show_aside").on('click',function(){
       $("aside").show(100);
       $("aside").css("color","#0E5CAD");
       $("aside").css("fontSize","20px")
       $("aside").css("fontWeight","bold")
       $("aside").html("The normal range of BMI is from 18.5 to 24. Mind your weight!");
   });
 });
