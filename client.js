import {initNet, send,receive,logout } from './network.js';
import {MD5 } from './md5.js';
initNet();
send("LOGIN Archangel "+btoa(MD5("Password"))+" * 0\n");
receive();
console.log(btoa(MD5("password")))
