var msgQueue=["User","0000"];


function msgPut(Q){
	document.getElementById("chatUserContent").innerHTML +="<p style=\"display:inline-block; color: white; font-family: JuneBug2; background-color: rgba(100, 100, 100, 0.5);\">"+Q[0]+">>></p> <p style=\"display:inline-block; color: white; font-family: JuneBug; \">"+ Q[1]+"</p></br>";
}


function chatSubmit() {
	msgQueue[0]=window.username;
	msgQueue[1] = document.getElementById("chatInput").value;
	msgPut(msgQueue) //display sent message
	console.log("fired!")
}

function chatPut(Name) {   //call this function back on joining chat
document.getElementById("chatList").innerHTML +="<p style=\"background-color: #2196f3;color: white; padding: 5px;\">"+Name+"</p>";
}
chatPut('top10%');
chatPut('topsmurfs');
chatPut('ultirtsTerminal');
