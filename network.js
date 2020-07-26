
	var net = require('net');
	var client = new net.Socket();


	export function initNet()
	{
		client.connect('8200', 'ultirts.net', function() {console.log('CONNECTED TO: ' + 'ultirts.net' + ':' + '8200');} );
	}
	export function send(msg)
	{
	client.write(msg);
	client.end();	
	}
	export function receive()
	{
		client.on('data', function(data) {window.serverReply=data; console.log('DATA: ' + window.serverReply);} );

	}
	export function logout()
	{
		client.destroy();
		client.on('close', function() {console.log('Connection closed');});
	}

