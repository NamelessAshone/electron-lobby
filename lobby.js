window.client.on("BATTLEOPENED",(battleid, type, natType, founder, ip, port, maxPlayer, passworded, rank, mapHesh, engineName, engineVersion, map, title, gameName, channel) => {
	console.log("BATTLE OPENED!!!!!!!!!!!!!!")
	document.getElementById("gameEntry").innerHTML+="<!--to be inserted by js--><li class = \"gameSubEntry\" style=\"display:inline; display:inline-block;position: relative;\"> <p class=\"gameInnerSubEntryTXT\" style=\"overflow: hidden; font-family: JuneBug3; position: relative; cursor:pointer;background : #2196f3;  margin: 20px ; padding: 25px; \" type=\"button\" >"+founder +"</br>"+map+"<p style=\"font-size: 2vw; color: #255784; position: absolute;  top: 44px; left:12px;\">"+title+"</p></p></li><!--to be inserted by js-->"




});

