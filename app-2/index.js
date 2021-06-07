const net = require('net');
const port = 7002;

var server = net.createServer((socket)=>{
    setInterval(()=>{
        var r = (Math.random()*100+1).toFixed(1);
        socket.write(r.toString());
    }, 2000);
});

server.listen(port, ()=>{
    console.log('Sensor 2 activado ('+port+')');
});


