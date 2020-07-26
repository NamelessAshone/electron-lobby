import {initNet, send,receive,logout} from './network.js';

const crypto = require('crypto');
window.loginBlocker=true;
export function login(user, pass){
	initNet();
	console.log("trying to send"+user+":"+pass)
	send("LOGIN "+user+" "+crypto.createHash('md5').update(pass).digest("base64")+" * 0\n");
	receive();
	//while (void('hhhh')==window.serverReply)
	//{
	//sleep(0.5);
	//}
	//console.log(crypto.createHash('md5').update("password").digest("base64"))

	if (window.serverReply.includes("ACCEPTED")){
		return true;}
}

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}
