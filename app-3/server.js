const net = require('net');
const express = require('express');
const socketio = require('socket.io');
const http =  require('http');
const fs = require('fs');
const filename = 'datos-sensores.txt';
const sensor1 = 7001;
const sensor2 = 7002;
const port = 7080;

var app = express();

app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/node_modules/bootstrap/dist'));
app.use(express.static(__dirname+'/node_modules/jquery/dist'));
app.use(express.static(__dirname+'/node_modules/@popperjs/core/dist'));

app.get('/', (req, res)=>{
    res.status(200).sendFile(__dirname+'/resources/index.html');
});

var server = http.createServer(app).listen(port, ()=>{
    console.log('Pagina levantada http://localhost:7080/');
});

var io = socketio(server);

var s1 = new net.Socket();
s1.connect(sensor1);
s1.on('data', (data)=>{
    data = data.toString();
    io.emit('lectura-1', data);
    console.log('sensor-1: '+data);
    fs.appendFile(filename, 'sensor-1: '+data+'\n',(e)=>{if(e) throw e});
});

var s2 = new net.Socket();
s2.connect(sensor2);
s2.on('data', (data)=>{
    data = data.toString();
    io.emit('lectura-2', data);
    console.log('sensor-2: '+data);
    fs.appendFile(filename, 'sensor-2: '+data+'\n',(e)=>{if(e) throw e});
});


