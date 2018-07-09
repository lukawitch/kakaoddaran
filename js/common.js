if (window.outerWidth>window.outerHeight) {

  $(function(){
    $('#back').css('margin','auto');
  });
}/*가로 길이가 길 때 back기본속성유지하고 margin:auto값만 줘서
가운데정렬만합니다*/
else{
 $(function(){
   $('#back').css('width',window.outerWidth);
   $('#back').css('height',window.outerHeight);
 });
}
/*그게아니라면  device의 가로세로길이를 가져와서 가로세로를 변경합니다*/
