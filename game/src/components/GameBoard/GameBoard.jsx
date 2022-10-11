import React from 'react';
import { useState, useEffect } from 'react';
import Square from '../Square/Square';
import './module.GameBoard.css';
import io from 'socket.io-client';


const socket = io('http://localhost:3001', { autoConnect: false });

export default function GameBoard() { 
    const [isWon, setIsWon] = useState(null);
    const [squares, setSquares] = useState(null);
    const [teko, setTeko] = useState(false);
    const [turn, setTurn] = useState(false);


    useEffect(() => {
        socket.connect();
        socket.on('autho', (allow) => {
            if (!allow) {
                socket.disconnect();
            }
            else {
                socket.on('start', (board) => {
                    setSquares(board);
                    setTurn(true);
                })
            }
        });
    }, []);



    useEffect(() => {
        socket.on('complete_move', (data) => {
            setSquares(data.board);

            if (data.win) {
                setIsWon(data.sign)
                setTurn(false);
            }
            if (data.teko) {
                setTurn(false);
                setTeko(true);
            }
            if (data.turn) { setTurn(data.turn) }
        });

        socket.on('complete_new_game', (data) => {
            setSquares(data);
            setIsWon(false);
            setTeko(false);
        });




    }, [socket]);


    const newGame = () => {
        setIsWon(false);
        setTeko(false);
        socket.emit('new_game');
        setTurn(true);
    }

    const move = (i, j) => {
        console.log(turn);
        if (turn) {
            socket.emit("move", { i, j });
            setTurn(false);
        }

    }

    return (

        <div className='GameBoard'>
            <div className='board'>
                {squares ? squares.map((item, index_i) => {
                    return item.map((square, index_j) => {
                        return <Square key={index_i + index_j} square={square} isWon={isWon} move={move} i={index_i} j={index_j} ></Square>
                    })
                }) : null}
            </div>
            <div className='nav'>
                <button className='newGame' onClick={newGame}>new game</button>
                {isWon ? <h1>{isWon} won!!</h1> : null}
                {teko ? <h2> teko !!</h2> : null}
                {!teko && turn ? <h3> your turn..</h3> : null}
                <div></div>
            </div>

        </div>

    )
}
