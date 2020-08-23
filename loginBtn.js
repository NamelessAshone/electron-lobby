const Config = require('electron-config');
const isRememberLogin = new Config();
const usernameMem = new Config();
const passwordMem = new Config();

document.getElementById("postLogin").style.visibility = "hidden";
document.getElementById("loginbox").style.visibility = "hidden";
document.getElementById("loginTerminal").style.visibility = "hidden";
var loginBtn = document.getElementById("loginbtn");
var passwordForm = document.getElementById("passwd");



loginBtn.addEventListener("mousedown", () => {
	loginBtn.style.background = "#1a1a1a";
});

loginBtn.addEventListener("mouseup", () => {
	loginBtn.style.background = "white";
	window.timer = setInterval(fadeLeave, 10);
});



if (isRememberLogin.get('isRemembered')=='true')
	{
	document.getElementById("usr").value=usernameMem.get('username');
	document.getElementById("passwd").value=passwordMem.get('password');
	document.getElementById("rememberName").checked = true;
	document.getElementById("loginbox").onmousemove = function(){if (window.isLoggedin == true){return;}logMeIn();};
	}








function logMeIn(){
	window.isLoggedin = true;
	var username = document.getElementById("usr").value;
	var password = document.getElementById("passwd").value;
	window.client.connectToServer();
	window.client.login(username, password);

	
	if (document.getElementById("rememberName").checked == true){
		isRememberLogin.set('isRemembered', 'true');
		usernameMem.set('username', username);
		passwordMem.set('password', password);
 	 } else {
		isRememberLogin.set('isRemembered', 'false');
	}
	window.client.on("ACCEPTED", (username) => {
		window.timer3 = setInterval(finalBoxEnlargeLeave, 10);
		window.username = username;
	});
	window.client.on("DENIED", (reason) => {
		window.client.endConnection();
	});
}

var i = 0;
var j = 0;
var k = 0;

function fadeLeave() {
	loginBtn.style.opacity = 1 - i * 0.04;
	loginBtn.style.left = 50 - 2 * i + "%";
	i = i + 1;
	if (i >= 100) {
		//clearInterval(timer);
		loginBtn.style.visibility = "hidden";
		document.getElementById("loginbox").style.opacity = 0;
		document.getElementById("loginbox").style.visibility = "visible";
		clearInterval(window.timer);
		window.timer2 = setInterval(ariseEnter, 10);
	}
}

function ariseEnter() {
	j = j + 6;
	document.getElementById("loginbox").style.opacity = j / 100;
	document.getElementById("loginbox").style.left = 70 - 0.2 * j + "%";
	if (j >= 100) {
		clearInterval(window.timer2);
	}
}

function finalBoxEnlargeLeave() {
	document.getElementById("shader").style.opacity = 1 - k * 0.01;
	document.getElementById("shader").style.width = 50 - 1 * k + "%";
	document.getElementById("logininput").style.opacity = 1 - k * 0.01;
	document.getElementById("logininput").style.width = 50 - 1 * k + "%";
	k = k + 1;
	if (k >= 100) {
		document.getElementById("loginbox").style.visibility = "hidden";
		document.getElementById("loginTerminal").style.visibility = "visible";

		clearInterval(window.timer3);
		document.getElementById("loginTerminal").innerHTML = window.serverReply;
		document.getElementById("loginTerminal").innerHTML +=
			"</br>Check Update: ||||||||||||||||||||</br> NONE";
		document.getElementById("loginTerminal").innerHTML +=
			"</br>Starting interface renderer</br> 0%";
		document.getElementById("loginTerminal").style.visibility = "hidden";
		document.getElementById("postLogin").style.visibility = "visible";
		document.getElementById("username").innerHTML =window.username
		document.getElementById("formLabel").innerHTML =window.username+ " >>> " ;

	}
}

