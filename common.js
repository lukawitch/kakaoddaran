if (matchMedia("screen and (min-width: 1024px)").matches) {

  $(function(){
    $('#back').css('margin','auto');
  });
}
else{
 $(function(){
   $('#back').css('width',window.outerWidth);
   $('#back').css('height',window.outerHeight);
 });
}
