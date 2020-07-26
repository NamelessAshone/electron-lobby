
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
	while(window.sendFinished === undefined) {
		require('deasync').runLoopOnce();
    		}
	delete window.sendFinished;
	}
	
	export function receive()
	{
		client.on('data', function(data) {window.serverReply=data; console.log('DATA from receive: ' + window.serverReply);} );
		while(window.serverReply === undefined) {
		require('deasync').runLoopOnce();
    		}
    		
	}
	
	export function logout()
	{
		client.destroy();
		client.on('close', function() {console.log('Connection closed');});
	}

