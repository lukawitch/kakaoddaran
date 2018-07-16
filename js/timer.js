document.write("<link rel='stylesheet' href='./css/game.css' type='text/css'>");
var num=1;
var num_image=new Array('num_five','num_four','num_three','num_two','num_one');
var Time;
var png;
var set;
png="<img src='./img/"+ num_image[0]+".png' id='choiceimage' />";
set= parent.document.createElement("div");
 set.id="numpos";
set.innerHTML = png;
parent.document.getElementById("top").appendChild(set);
var TEST=setInterval(function Time(){
     set.id="disappear";
png="<img src='./img/"+ num_image[num]+".png' id='choiceimage' />";
set= parent.document.createElement("div");
     set.id="numpos";
 set.innerHTML = png;
 parent.document.getElementById("top").appendChild(set);

   num++;

  if(num==5){
    clearInterval(TEST);
  }
},1000);
