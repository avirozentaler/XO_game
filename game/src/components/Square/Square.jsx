import React from 'react';
import './module.Square.css';

export default function Square(props){


    const tic = () => {
        if (!props.square && !props.isWon) {
            props.move(props.i ,props.j);
        }

    }

    return (
        <div className='Square' onClick={tic}>
            <div> 
              {props.square} 
              {/* {props.i} {props.j} */}
            </div>
        </div>
    )
}
