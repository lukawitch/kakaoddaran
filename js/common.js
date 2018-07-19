var wid=window.outerWidth;
var hei=window.outerHeight;
var widper;
var heiper;
var a=hei;
var gdc=0;
if(wid>hei){
  a=wid;
}
for(var i=1 ;i<=a;i++){
  if(wid%i==0&&hei%i==0){
    gdc=i;
  }
}
widper=wid/gdc;
heiper=hei/gdc;

if((widper/heiper)==(9/14)){
  $(function(){
  $('#back').css('width',window.outerWidth);
  $('#back').css('height',window.outerHeight);
   $('#bg1').css('width',window.outerWidth);
  $('#bg1').css('height',window.outerHeight);
  $('#back').css('margin','auto');
  	 $('#bg1').css('margin','auto');
});
}
else if((widper/heiper)>(9/14)){
  $(function(){
  $('#back').css('width',window.outerHeight*(9/14));
  $('#back').css('height',window.outerHeight);
   $('#bg1').css('width',window.outerHeight*(9/14));
  $('#bg1').css('height',window.outerHeight);
  $('#back').css('margin','auto');
  	 $('#bg1').css('margin','auto');
});

}
else{
  $(function(){
  $('#back').css('width',window.outerWidth);
  $('#back').css('height',window.outerWidth*(14/9));
   $('#bg1').css('width',window.outerWidth);
  $('#bg1').css('height',window.outerWidth*(14/9));
  $('#back').css('margin','auto');
  	 $('#bg1').css('margin','auto');
});
}
