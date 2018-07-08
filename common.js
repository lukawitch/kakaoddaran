if (window.outerWidth>window.outerHeight) {

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
