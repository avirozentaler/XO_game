import React from 'react';
import { useState } from 'react';
import Square from '../Square/Square';
import './module.GameBoard.css'


export default function GameBoard() {

    const [sign, setSign] = useState('X');
    const [squares, setSquares] = useState([Array(3).fill(''), Array(3).fill(''), Array(3).fill('')]);

    // const checkVecA = () => { return squares[0][0] === squares[0][1] && squares[0][1] === squares[0][2] }
    // const checkVecB = () => { return squares[1][0] === squares[1][1] && squares[1][1] === squares[1][2] }
    // const checkVecC = () => { return squares[2][0] === squares[2][1] && squares[2][1] === squares[2][2] }

    // const checkVecD = () => { return squares[0][0] === squares[1][0] && squares[1][0] === squares[2][0] }
    // const checkVecE = () => { return squares[0][1] === squares[1][1] && squares[1][1] === squares[2][1] }
    // const checkVecF = () => { return squares[0][2] === squares[1][2] && squares[1][2] === squares[2][2] }

    // const checkVecG = () => { return squares[0][0] === squares[1][1] && squares[1][1] === squares[2][2] }
    // const checkVecH = () => { return squares[0][2] === squares[1][1] && squares[1][1] === squares[2][0] }

    const isWin = (i, j) => {
       
        
            const result = false;
            if (i===0) {  }
            // if (i===0) { result = result || checkVecA(); }
            // if (i===1) { result = result || checkVecB(); }
            // if(i===2){result = result || checkVecC();}

            // if (j=== 0) { result = result || checkVecD(); }
            // if (j=== 1) { result = result || checkVecE(); }
            // if (j=== 2) { result = result || checkVecF(); }

            // if (i === j) { result = result || checkVecG(); }
            // if (i+j===2) { result = result || checkVecH(); }
// console.log(result);
            return result;
    }

    const checkWin = (i,j) => {
        console.log(  squares)
        isWin(i,j);
        console.log('checkWin');

    }

    const changeSquare = () => {
        sign === 'X' ? setSign('O') : setSign('X');
    }

    const insertSquare = (i, j) => {
        setSquares(squares.map((item_i, index_i) => {
            if (index_i === i) {
               return item_i.map((item_j, index_j) => {
                    if (index_j === j) {
        console.log('insertSquare');
                        
                        return sign
                    }
                    else {
                        return item_j
                    }
                })
            }
            else {
                return item_i
            }
        }))

    }

    return (

        <div className='GameBoard'>
            {squares.map((item, index_i) => {
                return item.map((square, index_j) => {
                    return <Square e={square} key={index_i + index_j} index_i={index_i} index_j={index_j} insertSquare={insertSquare} sign={sign} changeSign={changeSquare} checkWin={checkWin}></Square>
                })

            })}

        </div>

    )
}

