document.getElementById("loginbox").style.visibility = "hidden"; 
var loginBtn=document.getElementById("loginbtn");
loginBtn.addEventListener("mousedown",click);
loginBtn.addEventListener("mouseup",clicked);

var i=0
var j=0
function click(){
	loginBtn.style.background='#1a1a1a';
	}
	

function clicked()	
	{
	loginBtn.style.background='white';
	
	
	timer = setInterval(fadeLeave,10);

	
	
	
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
		clearInterval(timer);
		timer2 = setInterval(ariseEnter,10);
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

		clearInterval(timer2);

		
		}
	
	
	}

function accountChk()
	{
	var usr=document.getElementById("usr");
	var passwd=document.getElementById("passwd");
	//if (login(usr,passwd)== True)
	//	{
		//drawLobbyPage()
	//	}
	}
	

