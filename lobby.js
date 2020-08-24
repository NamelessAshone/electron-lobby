window.client.on("BATTLEOPENED",(battleid, type, natType, founder, ip, port, maxPlayer, passworded, rank, mapHesh, engineName, engineVersion, map, title, gameName, channel) => {
	console.log("BATTLE OPENED!!!!!!!!!!!!!!")
	document.getElementById("gameEntry").innerHTML+="<!--to be inserted by js--><li class = \"gameSubEntry\" style=\"display:inline;display:inline-block;position: relative;\"> <p class=\"gameInnerSubEntryTXT\" style=\"overflow: hidden; font-family: JuneBug2; position: relative; cursor:pointer;background : #2196f3;  margin: 20px ; padding: 25px; mix-blend-mode: screen;\" type=\"button\" >"+founder +"</br>"+map+"<p style=\"font-size: 1.5vw; color: #255784; position:absolute; top: 65px\">"+title+"</p></p></li><!--to be inserted by js-->"




});
