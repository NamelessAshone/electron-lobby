"use strict";

const net = require("net");
const crypto = require("crypto");
const EventEmitter = require("events");
const regexPatterns = require("./regex-patterns");

const SERVER_URL = "ultirts.net";
const SERVER_PORT = 8200;

class Client extends EventEmitter {
	constructor() {
		super();
		this.connect = false;
	}

	connectToServer(server_url = SERVER_URL, server_port = SERVER_PORT) {
		this.socket = new net.Socket();
		this.socket.connect(server_port, server_url);
		this.socket.on("connect", () => {
			this.connected = true;
			this.emit("connected");
		});
		this.socket.on("close", () => {
			this.connected = false;
			this.emit("disconnected");
		});
		this.socket.on("data", (data) => {
			data
				.toString()
				.split("\n")
				.forEach((message) => {
					if (message.length > 0) {
						console.log("Received: " + message)
						const commandLength = message.indexOf(" ");
						const command = message.substring(0, commandLength);
						const args = message.substring(commandLength, message.length);
						if (command in regexPatterns) {
							const pattern = regexPatterns[command];
							if (pattern) {
								const result = pattern.exec(args);
								if (result == null) console.log("Unknown Pattern: " + message);
								else this.emit(command, ...result.slice(1, result.length));
							} else {
								this.emit(command);
							}
						}
					}
				});
		});
	}
	

	
	login(username, password, cpu = 0, localIP = "*") {
		const passwordHash = crypto
			.createHash("md5")
			.update(password)
			.digest("base64");

		const message =
			"LOGIN " + username + " " + passwordHash + " " + cpu + " " + localIP;
		this.send(message);
		setInterval(() => { this.send("PING", true); }, 1000);
		
	}

	logout(reason = "unknown") {
		this.send("EXIT " + reason);
		this.socket.destroy();
		clearInterval(window.timer4);
	}

	send(message, display = false) {
		if (display) console.log("Sending: " + message);
		this.socket.write(message + "\n");
	}
}

module.exports = Client;
