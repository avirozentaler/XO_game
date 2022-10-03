import React from 'react';
import { useState, useEffect } from 'react';
import Square from '../Square/Square';
import './module.GameBoard.css'
import io from 'socket.io-client';

const socket = io('http://localhost:3001');

export default function GameBoard() {

    const [isWon, setIsWon] = useState('');
    const [squares, setSquares] = useState();

    useEffect(() => {
        socket.on('start', (data) => {
            setSquares(data);
        })
    }, []);

    useEffect(() => {

        socket.on('complete_move', (data) => {
            setSquares(data);
        });

        socket.on('complete_new_game', (data) => {
            setSquares(data);
        });
        socket.on('isWin',(data)=>{
            setIsWon(data);
            console.log(`${data} is won!!`);
        })
    }, [socket])

    const newGame = () => {
        setIsWon('');
        socket.emit('new_game', null);
    }

    const move = (i, j) => {
        socket.emit("move", { i, j })
    }






    return (

        <div className='GameBoard'>
            {squares ? squares.map((item, index_i) => {
                return item.map((square, index_j) => {
                    return <Square key={index_i + index_j} square={square} isWon={isWon} move={move} i={index_i} j={index_j} ></Square>
                })
            }) : null}
            <button onClick={newGame}>new game</button>
            {isWon?<h2>{isWon} won!!</h2> :null}
        </div>

    )
}

// const checkVecA = () => { return squares[0][0] === squares[0][1] && squares[0][1] === squares[0][2] }
// const checkVecB = () => { return squares[1][0] === squares[1][1] && squares[1][1] === squares[1][2] }
// const checkVecC = () => { return squares[2][0] === squares[2][1] && squares[2][1] === squares[2][2] }

// const checkVecD = () => { return squares[0][0] === squares[1][0] && squares[1][0] === squares[2][0] }
// const checkVecE = () => { return squares[0][1] === squares[1][1] && squares[1][1] === squares[2][1] }
// const checkVecF = () => { return squares[0][2] === squares[1][2] && squares[1][2] === squares[2][2] }

// const checkVecG = () => { return squares[0][0] === squares[1][1] && squares[1][1] === squares[2][2] }
// const checkVecH = () => { return squares[0][2] === squares[1][1] && squares[1][1] === squares[2][0] }



// const inspectionWin = () => {
//     const result = false;

//     if (i === 0) { result = result || checkVecA(); }
//     if (i === 1) { result = result || checkVecB(); }
//     if (i === 2) { result = result || checkVecC(); }

//     if (j === 0) { result = result || checkVecD(); }
//     if (j === 1) { result = result || checkVecE(); }
//     if (j === 2) { result = result || checkVecF(); }

//     if (i === j) { result = result || checkVecG(); }
//     if (i + j === 2) { result = result || checkVecH(); }
//     console.log(result);
// }





    // const insertSquare = (i, j) => {
    //     setSquares(squares.map((item_i, index_i) => {
    //         if (index_i === i) {
    //             return item_i.map((item_j, index_j) => {
    //                 if (index_j === j) {
    //                     console.log('insertSquare');

    //                     return sign
    //                 }
    //                 else {
    //                     return item_j
    //                 }
    //             })
    //         }
    //         else {
    //             return item_i
    //         }
    //     }))

    // }