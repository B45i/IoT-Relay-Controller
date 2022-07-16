import express, { response } from 'express';
import http from 'http';
import { Server } from 'socket.io';
import { resolve } from 'path';
import cors from 'cors';

const PORT = process.env.PORT || 4001;

const buttons = [
    { name: 'Bedroom Light', id: 'btn_1' },
    { name: 'Livingroom Light', id: 'btn_2' },
    { name: 'TV', id: 'btn_3' },
    { name: ' Washing Machine', id: 'btn_4' },
    { name: 'Bed room fan', id: 'btn_5' },
    { name: 'Fan living room', id: 'btn_6' },
];

const app = express();
const httpServer = http.createServer(app);
const io = new Server(httpServer, { cors: { origin: '*' } });

app.use(express.static(resolve('build')));

app.use(cors());

app.get('/buttons', (req, res) => {
    return res.json(buttons);
});

// io.on('connection', socket => {
//     console.log('New Connection');

//     io.to(socket.id).emit('buttonState', buttonState);

//     socket.on('disconnect', () => {
//         console.log('Disconnected');
//     });

//     socket.on('buttonState', value => {
//         console.log('buttonState:', value);
//         buttonState = value;
//         socket.broadcast.emit('buttonState', value);
//     });
// });

httpServer.listen(PORT, () => {
    console.log('Running on: ', PORT);
});
