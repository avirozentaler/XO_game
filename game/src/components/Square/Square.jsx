import React from 'react';
import './module.Square.css';

export default function Square(props) {

   


    const tic = async () => {
        if (!props.e) {
          await  props.insertSquare(props.index_i, props.index_j);
            props.checkWin(props.index_i, props.index_j);
            props.changeSign();
        }

    }

    return (
        <div className='Square' onClick={tic}>
            <div>
                
                {props.e}
            </div>
        </div>
    )
}
