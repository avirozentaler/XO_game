const express = require('express');
const http = require('http');
const cors = require('cors')
const { Server } = require('socket.io')
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: ["http://localhost:3000"] } });
let { board, inspectionWin, boardFull } = require('./data.js');


let sign = "X";
let lastId = '';
let clientsCount = 0;

const modifySign = () => {
    if (sign === "X") {
        sign = "O";
    }
    else {
        sign = "X";
    }
}


io.on('connection', (socket) => {
    clientsCount++;
    console.log(clientsCount);
    socket.emit('autho', clientsCount <= 2);


    socket.on('disconnect', () => {
        
         clientsCount-- 
        });
    socket.emit('start', board);

    socket.on('new_game', () => {
       console.log('new game');
       board =  board.map((arr) => {
            return arr.map((item) => {
                return item ='';
                 });
                });
        console.log(board);
        lastId = '';
        socket.emit('complete_new_game', board);
        socket.broadcast.emit('complete_new_game', board);
        socket.broadcast.emit('complete_new_game', board);
    });


    socket.on('move', (data) => {
        if (clientsCount === 2) {
            if (socket.id != lastId) {
                console.log(lastId);
                lastId = socket.id
                const { i, j } = data;
                board[i][j] = sign;

                const isWin = inspectionWin(i, j);

                if (isWin) {
                    console.log('win');
                    socket.emit('complete_move', { board, win: true, teko: false, sign });
                    socket.broadcast.emit('complete_move', { board, win: true, teko: false, sign });

                }
                else if (boardFull()) {

                    console.log('teko');
                    socket.emit('complete_move', { board, win: false, teko: true });
                    socket.broadcast.emit('complete_move', { board, win: false, teko: true });
                }
                else {
                    console.log('normal');
                    socket.emit('complete_move', { board, win: false, teko: false, sign, turn: false });
                    socket.broadcast.emit('complete_move', { board, win: false, teko: false, sign, turn: true });
                }
                modifySign();
            }
        }
    });



})




server.listen(3001, () => console.log('socketIo connsected with port 3001'))





