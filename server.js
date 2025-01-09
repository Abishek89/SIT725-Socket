const net = require('net');
const evaluate = require('./calculator');

// Create a server
const server = net.createServer((socket) => {
    console.log('Client connected');

    // Handle incoming data from client
    socket.on('data', (data) => {
        console.log(`Received: ${data}`);
        const result = evaluate(data.toString());
        socket.write(`Result: ${result}`);
    });

    // Handle client disconnect
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

// Server listens on port 8080
server.listen(8080, () => {
    console.log('Server listening on port 8080');
});
