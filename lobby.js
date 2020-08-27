window.client.on("BATTLEOPENED",(battleid, type, natType, founder, ip, port, maxPlayer, passworded, rank, mapHesh, engineName, engineVersion, map, title, gameName, channel) => {
	console.log("BATTLE OPENED!!!!!!!!!!!!!!")
	document.getElementById("gameEntry").innerHTML+="<!--to be inserted by js--><li class = \"gameSubEntry\" style=\"display:inline;display:inline-block;position: relative;\"> <p onclick=\"joinBattle("+"&#39;"+battleid+"&#39;,&#39;"+ type+"&#39;,&#39;"+natType+"&#39;,&#39;"+founder+"&#39;,&#39;"+ip+"&#39;,&#39;"+port+"&#39;,&#39;"+maxPlayer+"&#39;,&#39;"+ passworded+"&#39;,&#39;"+rank+"&#39;,&#39;"+mapHesh+"&#39;,&#39;"+engineName+"&#39;,&#39;"+engineVersion+"&#39;,&#39;"+ map+"&#39;,&#39;"+title+"&#39;,&#39;"+gameName+"&#39;,&#39;"+channel+"&#39;)\"class=\"gameInnerSubEntryTXT\" style=\"overflow: hidden; font-family: JuneBug2; position: relative; cursor:pointer;background : #2196f3;  margin: 20px ; padding: 25px; mix-blend-mode: screen; font-weight: bold;\" type=\"button\" >"+founder +"</br>"+map+"<p style=\"font-size: 1.5vw; color: #255784; position:absolute; top: 65px ;background-color: rgba(255,255,255,0.85); padding:2px; box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3; mix-blend-mode: screen;\">"+title+"</p></p></li><!--to be inserted by js-->"




});
