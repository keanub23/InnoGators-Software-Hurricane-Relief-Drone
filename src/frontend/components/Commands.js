import socket from '../socket';

function sendCommand(command) {
    return function() {
      console.log(`Sending the command ${command}`);
      socket.emit('command', command);
    };
  }
  

const Commands = () => {
    return (
    <div>
        <button onClick={sendCommand('takeoff')}>TAKEOFF</button>
        <button onClick={sendCommand('land')}>LAND</button>
        <button onClick={sendCommand('up 10')}>UP 10cm</button>
        <button onClick={sendCommand('down 10')}>DOWN 10cm</button>
        <button onClick={sendCommand('left 10')}>LEFT 10cm</button>
        <button onClick={sendCommand('right 10')}>RIGHT 10cm</button> 
        <button onClick={sendCommand('emergency')}>EMERGENCY</button>  
    </div>
    )
}

export default Commands;