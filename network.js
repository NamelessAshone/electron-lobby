import {passwded} from './loginBtn.js';
	var net = require('net');
	var client = new net.Socket();


	export function initNet()
	{
		client.connect('8200', 'ultirts.net', function() {console.log('CONNECTED TO: ' + 'ultirts.net' + ':' + '8200');window.initFinished=true} );
		while(window.initFinished === undefined) {
		require('deasync').runLoopOnce();
    		}
		delete window.initFinished;
	}
	
	export function send(msg)
	{
	client.write(msg,function(msg) {console.log('sending'+msg);window.sendFinished=true} );

	}
	
	export function receive()
	{
		client.on('data', function(data) {window.serverReply=data; console.log('DATA from receive: ' + window.serverReply);
		if (window.serverReply.toString().includes("ACCEPTED"))
			{
			console.log(">>>>>>>>>>>>>LOGIN SUCCESSFUL!")
			passwded();
			
			}
		
		
		
		
		} );
		
    		
	}
	
	export function logout()
	{
		client.destroy();
		client.on('close', function() {console.log('Connection closed');});
	}

