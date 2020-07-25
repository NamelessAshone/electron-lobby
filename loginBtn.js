document.getElementById("logininput").style.visibility = "hidden"; 
var loginBtn=document.getElementById("loginbtn");
loginBtn.addEventListener("mousedown",click);
loginBtn.addEventListener("mouseup",clicked);


function click(){
	loginBtn.style.background='#1a1a1a';
	}
	

function clicked()	
	{
	loginBtn.style.background='white';
	document.getElementById("logininput").style.visibility = "visible"; 
	loginBtn.style.visibility = "hidden"
	}

function accountChk()
	{
	var usr=document.getElementById("usr")
	var passwd=document.getElementById("passwd")
	//if (login(usr,passwd)== True)
	//	{
		//drawLobbyPage()
	//	}
	}
