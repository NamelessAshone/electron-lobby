function joinBattle(battleid, type, natType, founder, ip, port, maxPlayer, passworded, rank, mapHesh, engineName, engineVersion, map, title, gameName, channel)
{
	console.log("joined battle"+title)
	document.getElementById("lobbyContent").style.visibility = "hidden"; //hide lobby page once user goes to prebattle panel
	document.getElementById("prebattle").style.visibility = "visible";
	document.getElementById("pregameTitle").innerHTML =">>> "+title;
	document.getElementById("hostSays").innerHTML ="afk 3sec for dinnar";
}

function donutPut()
{
document.getElementById("prebattle").innerHTML +="<div class=\"chart-container\" style=\"position: relative; height:50%; width:50%\"><canvas id=\"mapPoll\"></canvas></div>"

var ctx = document.getElementById("mapPoll");
window.mapPoll = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue'],
        datasets: [{
            label: '# of Votes',
            data: [1,1],
            backgroundColor: [
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.4)',
		'rgba(255, 255, 255, 0.6)',
		'rgba(255, 255, 255, 0.8)',
		'rgba(255, 255, 255, 1)',
            ],
            borderColor: [
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 0.4)',
                'rgba(255, 255, 255, 0.6)',
                'rgba(255, 255, 255, 0.8)',
                'rgba(255, 255, 255, 1)',

            ],
            borderWidth: 1
        }]
    },
    options: {
    legend: {
            display: true,
            labels: {
                fontColor: 'rgba(255, 255, 255,1)',
                fontSize: 12,
            }
        },
    
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

};



function pollPut(pollName)
{
	document.getElementById("prebattle").innerHTML +="<div class=\"prebattlePolls\" style=\"height:10%; width:100%; position:relative;\"><div id=\"theBar\" style=\"height:80%; width:80%; position:absolute;\"><div id=\" "+pollName+"yesYesYes\" style=\"left:0%; height:30%; width:50%; position:absolute;background-color: #FFFFFF\"></div><div id=\""+pollName+"noU\" style=\"right:0; height:30%; width:50%; position:absolute; overflow:hidden\"><span style=\"position: absolute; top: -50%; color: white; font-size:2vw;\">///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////<span></span></span></div></div><p style=\"left:0%;top:10%; position:absolute;color: #FFFFFF\">Satisfying: changing battle name to A?</p></div>";

}


function donutUpdate()
{




window.mapPoll.data.datasets[0].data[2] = 80;
window.mapPoll.data.labels[2] = "Newly Added";

window.mapPoll.update();



}





























function pollUpdate()
{


}
