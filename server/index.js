const express = require('express');
const http = require('http');
const cors = require('cors')
const { Server } = require('socket.io')
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: ["http://localhost:3000"] } });
let {sign,board,inspectionWin} = require('./data.js');

const modifySign = () => {
    if (sign === "X") {
        sign = "O";
    }
    else {
        sign = "X";
    }
}


io.on('connect', (socket) => {

    socket.emit('start', board);

    socket.on('new_game', () => {
        board = [Array(3).fill(''), Array(3).fill(''), Array(3).fill('')];
        socket.emit('complete_new_game', board);
    });

    socket.on('move', (data) => {
        const { i, j } = data;
        board[i][j] = sign;
        const isWin = inspectionWin(i, j);
        // if(inspectionWin(i, j)){
        //     socket.emit('isWin',sign);
        // } 
        console.log(isWin)
        if(isWin){
            console.log(board);
            socket.emit('isWin',sign);
        } 
        socket.emit('complete_move', board);
        modifySign();
    });



})




server.listen(3001, () => console.log('socketIo connsected with port 3001'))




// const checkVecA = () => { return board[0][0] === board[0][1] && board[0][1] === board[0][2] }
// const checkVecB = () => { return board[1][0] === board[1][1] && board[1][1] === board[1][2] }
// const checkVecC = () => { return board[2][0] === board[2][1] && board[2][1] === board[2][2] }

// const checkVecD = () => { return board[0][0] === board[1][0] && board[1][0] === board[2][0] }
// const checkVecE = () => { return board[0][1] === board[1][1] && board[1][1] === board[2][1] }
// const checkVecF = () => { return board[0][2] === board[1][2] && board[1][2] === board[2][2] }

// const checkVecG = () => { return board[0][0] === board[1][1] && board[1][1] === board[2][2] }
// const checkVecH = () => { return board[0][2] === board[1][1] && board[1][1] === board[2][0] }




// const inspectionWin = (i, j) => {
//     let result = false;

//     if (i === 0) { result = result || checkVecA(); }
//     if (i === 1) { result = result || checkVecB(); }
//     if (i === 2) { result = result || checkVecC(); }

//     if (j === 0) { result = result || checkVecD(); }
//     if (j === 1) { result = result || checkVecE(); }
//     if (j === 2) { result = result || checkVecF(); }

//     if (i === j) { result = result || checkVecG(); }
//     if (i + j === 2) { result = result || checkVecH(); }
//     return result;
// }

