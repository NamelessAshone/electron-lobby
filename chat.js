var displayedChat="main";
var msgQueue=["User","0000"];
function msgPut(Q){
	 //if(username == Q[0]) {  } 
	document.getElementById("chatUserContent"+Q[2]).innerHTML +="<p style=\"display:inline-block; color: white; font-family: JuneBug2; background-color: rgba(100, 100, 100, 0.5);\">"+Q[0]+">>></p> <p style=\"display:inline-block; color: white; font-family: JuneBug; \">"+ Q[1]+"</p></br>";
}

function chatSubmit() {
	
	msgQueue[0]=window.username;
	msgQueue[1] = document.getElementById("name"+displayedChat).value;
	
	console.log("fired!");
	window.client.say(displayedChat,msgQueue[1])
}

function chatDel(Name) {   
    if(typeof(document.getElementById(Name)) == 'undefined' || document.getElementById(Name) == null){
       console.log("channel "+Name+" does not exist");
       return;
    } 
	console.log("removing "+Name);
	document.getElementById(Name).parentNode.removeChild(document.getElementById(Name));
	document.getElementById('chat'+Name).parentNode.removeChild(document.getElementById('chat'+Name));
	if (Name==displayedChat)
	{
	console.log("A CHAT'S DISPLAYED IS BEING DISPOSED OF!");
	displayedChat="disposed"
	}
}


//  main com is joined automatically without calling any functions



function chatPut(Name, Desc="Intergalactic Quantum Com") {   //call this function back on joining chat
	console.log("adding "+Name);
	if (displayedChat!="main"){document.getElementById("chat"+displayedChat).style.visibility = "hidden";}
	displayedChat=Name; //update displayed chat with the new chat
	

document.getElementById("chatList").innerHTML +="<p id=\""+displayedChat+"\"><span onclick=\"chatSwt(&#39;"+displayedChat+"&#39;,displayedChat)\"style=\"background-color: #2196f3;color: white; padding: 5px;\">"+displayedChat.substring(0, 6)+"</span><span onclick=\"chatDel(&#39;"+displayedChat+"&#39;)\" id=\"chatClose\" class=\"chatClose\" >&#x2715;</span></p>";

document.getElementById("chatContainer").innerHTML +=" <div class=\"chatContent\" id=\"chat"+displayedChat+"\"><h1 style=\"position: absolute; color: white; top: 0%; left: 9%;font-family: JuneBug2;\">"+displayedChat+"</h1><p style=\"color: white; font-family: JuneBug3;\">"+Desc+"</p><div class=\"form__group field\" style=\"bottom:1%; width:100%; position:absolute;left:2%;\"><input onchange=\"chatSubmit()\" type=\"input\" class=\"form__field\" placeholder=\""+window.username+"\" name=\"name\" id=\'name"+displayedChat+"\' required /><label for=\"name"+displayedChat+"\" class=\"form__label\" id=\"formLabel\">"+window.username+"</label></div><div class=\"limitingframe\" style=\"width:107% ;height:78%;top:2%; overflow:scroll; overflow-x: hidden; position:relative;\"><div class=\"chatUserContent\" id=\"chatUserContent"+displayedChat+"\" style =\"bottom: 3%;position: relative; overflow: hidden;\"><!--chat content to be inserted--></div></div></div>";

}

function chatSwt(toChat,fromChat){
        if(toChat == fromChat) { 
     	    console.log("already on "+fromChat);
	    return;
        }
	console.log("switching to "+toChat);
	if (fromChat!="disposed") {document.getElementById("chat"+fromChat).style.visibility = "hidden";}
	document.getElementById("chat"+toChat).style.visibility = "visible";
	displayedChat=toChat;
}


//chatPut('topsmurfs','very competitive');
//chatPut('ultirtsTerminal','terminal');
