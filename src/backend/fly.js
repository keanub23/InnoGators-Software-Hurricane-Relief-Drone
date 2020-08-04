const dgram = require('dgram');
const wait =  require('waait');
const Delays = require('./Delays');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const PORT = 8889;
const HOST = '192.168.10.1';

const drone = dgram.createSocket('udp4');
drone.bind(PORT);

const STATE = dgram.createSocket('udp4');
STATE.bind(8890);

drone.on('message', message => {
    console.log(`Message from drone: ${message}`);
});

STATE.on('message', state => {
    console.log(state.toString());
});

function handleError(err) {
    if (err) {
        console.log('Error occurred!');
        console.log(err);
    }
}

const commands = ['command', 'batttery?', 'takeoff', 'land'];

drone.send('command', 0, 'command'.length, PORT, HOST, handleError);

let i = 0;

/*async function start() {
    const command = commands[i];
    const delay = Delays[command];
    console.log(`Running command: ${command}`);
    drone.send(command, 0, command.length, PORT, HOST, handleError);
    await wait(delay);
    i += 1;
    if (i < commands.length) {
        return start();
    }
    
    console.log('Finished.');
} 
start();*/
io.on('connection', socket => {

    socket.on('command', command => {
        console.log('Command Sent');
        console.log(command);
        drone.send(command, 0, command.length, PORT, HOST, handleError);

    });

    socket.emit('status', 'CONNECTED');
}); 

http.listen(6767, () => {
    console.log('Socket io server running');
})
