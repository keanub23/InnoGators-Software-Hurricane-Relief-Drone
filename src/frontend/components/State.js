import { useState, useEffect } from 'react';
import socket from '../socket';
 

function useSocket() {
    const [status, updateStatus] = useState('DISCONNECTED');

socket.on('status', message => {
    console.log('Socket sent Message');
    updateStatus(message);
});
return status;
}

const DroneState = () => {
    const status = useSocket();
    return <p>State: {status}</p>
};

export default DroneState;