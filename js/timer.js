document.write("<link rel='stylesheet' href='./css/game.css' type='text/css'>");
var num=1;
var num_image=new Array('num_five','num_four','num_three','num_two','num_one');
var Time;
var png;
var set;

png="<img src='./img/"+ num_image[0]+".png' id='timeimage' />";
set= parent.document.createElement("div");
 set.id="numpos";
set.innerHTML = png;
    $('#numpos').css('height',window.outerHeight*0.3);
parent.document.getElementById("top").appendChild(set);
  var TEST=setInterval(function Time(){
       set.id="disappear";
  $('#numpos').css('height',window.outerHeight*0.3);
  png="<img src='./img/"+ num_image[num]+".png' id='timeimage' />";
  set= parent.document.createElement("div");
       set.id="numpos";
       $(function(){
           $('#numpos').css('height',window.outerHeight*0.3);
       });
   set.innerHTML = png;

   parent.document.getElementById("top").appendChild(set);

     num++;

    if(num==5){
      clearInterval(TEST);
      $('#numpos').css('height',window.outerHeight*0.3);
    }
  },1000);
