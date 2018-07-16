document.write("<link rel='stylesheet' href='./css/common.css' type='text/css'>");

/*보기이미지 랜덤값을 돌린후 이배열안에다가 최종값을 넣어야한다.*/

var dishes;
var div
for (var i = 0; i < imagename.length; i++) {
dishes = "<img src='./img/dessert/"+imagename[i]+".png' id='choiceimage' />";

 div= parent.document.createElement("div");
div.id = "choicepos";
div.innerHTML = dishes;
parent.document.getElementById("back").appendChild(div);
}
