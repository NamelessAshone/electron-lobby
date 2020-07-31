const crypto = require("crypto");
import { client } from "./network.js";

document.getElementById("loginbox").style.visibility = "hidden";
document.getElementById("loginTerminal").style.visibility = "hidden";
var loginBtn = document.getElementById("loginbtn");
var passwordForm = document.getElementById("passwd");

client.on("ACCEPTED", (username) => {
	window.timer3 = setInterval(finalBoxEnlargeLeave, 10);
});

loginBtn.addEventListener("mousedown", () => {
	loginBtn.style.background = "#1a1a1a";
});

loginBtn.addEventListener("mouseup", () => {
	loginBtn.style.background = "white";
	window.timer = setInterval(fadeLeave, 10);
});

passwordForm.addEventListener("change", () => {
	var username = document.getElementById("usr").value;
	var password = document.getElementById("passwd").value;
	client.login(username, password);
});

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
	}
}
