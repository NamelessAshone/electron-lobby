window.client.on("BATTLEOPENED",(battleid, type, natType, founder, ip, port, maxPlayer, passworded, rank, mapHesh, engineName, engineVersion, map, title, gameName, channel) => {
	console.log("BATTLE OPENED!!!!!!!!!!!!!!")
	document.getElementById("gameEntry").innerHTML+="<!--to be inserted by js--><li class = \"gameSubEntry\"><div  class=\"gameInnerSubEntry\" style=\"cursor:pointer; width: 60%;background : #2196f3; \" type=\"button\" ><p>Battle name:"+title+"</p></br><p>Battle host:"+founder+"</p><p>map:"+map+"</p></div></li><!--to be inserted by js-->"




});

