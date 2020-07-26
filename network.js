
	var net = require('net');
	var client = new net.Socket();
	var serverReply;

	export function initNet(msg)
	{
		client.connect('8200', 'ultirts.net', function() {console.log('CONNECTED TO: ' + 'ultirts.net' + ':' + '8200');} );
	}
	export function send(msg)
	{
	client.write(msg);client.end()	
	}
	export function receive()
	{
		client.on('data', function(data) {console.log('DATA: ' + data); serverReply=data;} );

	}
	export function logout()
	{
		client.destroy();
		client.on('close', function() {console.log('Connection closed');});
	}

