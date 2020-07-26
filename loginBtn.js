import {initNet,receive} from './network.js';
import {send,logout} from './network.js';
document.getElementById("loginbox").style.visibility = "hidden"; 
var loginBtn=document.getElementById("loginbtn");
loginBtn.addEventListener("mousedown",click);
loginBtn.addEventListener("mouseup",clicked);
var passwdForm=document.getElementById("passwd")
passwdForm.addEventListener('change', accountChk);
document.getElementById("loginTerminal").style.visibility = "hidden"; 
const crypto = require('crypto');

var i=0
var j=0
var k=0
function click(){
	loginBtn.style.background='#1a1a1a';
	}
	

function clicked()	
	{
	loginBtn.style.background='white';
	
	
	window.timer = setInterval(fadeLeave,10);

	
	
	
	}
	
function fadeLeave()
	{
	loginBtn.style.opacity=1-i*0.04;
	loginBtn.style.left=(50-2*i)+"%"
	i=i+1;
	if (i>=100)
		{
		
		//clearInterval(timer);
		loginBtn.style.visibility = "hidden";
		document.getElementById("loginbox").style.opacity=0;
		document.getElementById("loginbox").style.visibility = "visible"; 
		clearInterval(window.timer);
		window.timer2 = setInterval(ariseEnter,10);
		}
	
	}
function ariseEnter()
	{
	j=j+6;
	document.getElementById("loginbox").style.opacity=j/100;
	document.getElementById("loginbox").style.left=70-0.2*j+"%";
	console.log(i);
	if (j>=100)
		{

		clearInterval(window.timer2);

		
		}
	
	
	}

function accountChk()
	{
	initNet(); receive();
	var usr=document.getElementById("usr");
	var passwd=document.getElementById("passwd");
	send("LOGIN "+usr.value+" "+crypto.createHash('md5').update(passwd.value).digest("base64")+" * 0\n");
	}
export function passwded()
	{
	window.timer3 = setInterval(finalBoxEnlargeLeave,10);
	}
function finalBoxEnlargeLeave()
	{
	document.getElementById("shader").style.opacity=1-k*0.01;
	document.getElementById("shader").style.width=(50-1*k)+"%"	
	document.getElementById("logininput").style.opacity=1-k*0.01;
	document.getElementById("logininput").style.width=(50-1*k)+"%"
	k=k+1;
	if (k>=100)
		{
		
		//clearInterval(timer);
		document.getElementById("loginbox").style.visibility = "hidden"; 
		document.getElementById("loginTerminal").style.visibility = "visible"; 

		clearInterval(window.timer3);
		document.getElementById("loginTerminal").innerHTML = window.serverReply;
		document.getElementById("loginTerminal").innerHTML +="</br>Check Update: ||||||||||||||||||||</br> NONE";
		document.getElementById("loginTerminal").innerHTML +="</br>Starting interface renderer</br> 0%";
		}
	
	
	
	}
	

