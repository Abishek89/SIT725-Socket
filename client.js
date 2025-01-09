const net = require('net');

// Client code to connect to server and send a message
const client = net.createConnection({ port: 8080 }, () => {
    console.log('Connected to server');
    client.write('5 + 3 * 2');
});

// Handle data received from server
client.on('data', (data) => {
    console.log(data.toString());
    client.end();
});

// Handle client disconnect
client.on('end', () => {
    console.log('Disconnected from server');
});
