var msgQueue=["User","0000"];


function msgPut(Q){
	document.getElementById("chatUserContent").innerHTML +="<p style=\"display:inline-block; color: white; font-family: JuneBug2; background-color: rgba(100, 100, 100, 0.5);\">"+Q[0]+">>></p> <p style=\"display:inline-block; color: white; font-family: JuneBug; \">"+ Q[1]+"</p></br>";
}


function chatSubmit() {
	msgQueue[0]=window.username;
	msgQueue[1] = document.getElementById("name").value;
	msgPut(msgQueue) //display sent message
	console.log("fired!");
}

function chatDel(Name) {   
	console.log("removing"+Name);
document.getElementById(Name).parentNode.removeChild(document.getElementById(Name));

}

function chatPut(Name) {   //call this function back on joining chat

Name;
document.getElementById("chatList").innerHTML +="<p id=\""+Name+"\"><span style=\"background-color: #2196f3;color: white; padding: 5px;\">"+Name.substring(0, 6)+"</span><span onclick=\"chatDel(&#39;"+Name+"&#39;)\" id=\"chatClose\" class=\"chatClose\" >&#x2715;</span></p>";

}
chatPut('top10%');
chatPut('topsmurfs');
chatPut('ultirtsTerminal');
