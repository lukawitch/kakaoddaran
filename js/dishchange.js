document.write("<link rel='stylesheet' href='./css/game.css' type='text/css'>");
var number=1;
var Random_img='neo_1'
var dish_image=new Array('neo_1','one');
var Change;
var dish;
var setting;
dish="<img src='./img/dessert/"+  dish_image[0]+".png' id='Tableware' />";
setting= parent.document.createElement("div");
 setting.id="dishpos";
setting.innerHTML = dish;
parent.document.getElementById("top").appendChild(setting);

  var Changer=setInterval(function Change(){
    setting.id="disappear";
    dish ="<img src='./img/dessert/"+  dish_image[0]+".png' id='Tableware' />";
     setting= parent.document.createElement("div");
      setting.id="dishpos";
     setting.innerHTML = dish;
     $(function(){
         $('#dishpos').css('height',window.outerHeight*0.3);
     });
     parent.document.getElementById("top").appendChild(setting);
     number++;

    if(number==3){
      clearInterval(Changer);
       setting.id="disappear";
  dish="<img src='./img/dessert/"+ dish_image[1]+".png' id='Tableware' />";
  setting= parent.document.createElement("div");
  setting.id="dishpos";
  $(function(){
      $('#dishpos').css('height',window.outerHeight*0.3);
  });
  setting.innerHTML = dish;
  parent.document.getElementById("top").appendChild(setting);
var num=1;
var num_image=new Array('num_five','num_four','num_three','num_two','num_one');
var Time;
var png;
var set;

png="<img src='./img/"+ num_image[0]+".png' id='timeimage' />";
set= parent.document.createElement("div");
 set.id="numpos";
set.innerHTML = png;
$(function(){
    $('#numpos').css('height',window.outerHeight*0.3);
});
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
  },1000);}

  },1000);
