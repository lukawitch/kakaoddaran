

if ($("div[name=spoon]")) {

  $(function(){
    $("#Tablewarepos").css('float','right');
  });
}
/*포크,수저,이미지배치는 float값만 다르므로
수저부분 배치할 때는 float=right로 바꾸는 작업을 하기위해
있는 js구문*/
var nrandum =[];
var result;
var i=0;
var j;
var TF=true;
while(i<4){
  result = Math.floor(Math.random() * 8);
  nrandum[i]=result;
for(j=i-1;j>=0;j--){
  if(nrandum[j]==nrandum[i]){
    TF=false;
    break;
  }
}
if(TF==true){
  i++;
}
else{
  TF=true;
}
}
var imagename = new Array( 'neo_1', 'neo_2', 'neo_3','neo_4' , 'neo_5', 'neo_6', 'neo_7', 'neo_8');
