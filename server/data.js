




let sign = "X";
const board = [Array(3).fill(''), Array(3).fill(''), Array(3).fill('')];



const checkVecA = () => { return board[0][0] && board[0][0] === board[0][1] && board[0][1] === board[0][2] }
const checkVecB = () => { return board[1][0] && board[1][0] === board[1][1] && board[1][1] === board[1][2] }
const checkVecC = () => { return board[2][0] && board[2][0] === board[2][1] && board[2][1] === board[2][2] }
 
const checkVecD = () => { return board[0][0] && board[0][0] === board[1][0] && board[1][0] === board[2][0] }
const checkVecE = () => { return board[0][1] && board[0][1] === board[1][1] && board[1][1] === board[2][1] }
const checkVecF = () => { return board[0][2] && board[0][2] === board[1][2] && board[1][2] === board[2][2] }

const checkVecG = () => { return board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2] }
const checkVecH = () => { return board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0] }




const inspectionWin = (i, j) => {
    let result = false;

    if (board[i,j] && i === 0) { result = result || checkVecA(); if(checkVecA()){console.log('A')}}
    if (board[i,j] && i === 1) { result = result || checkVecB(); if(checkVecB()){console.log('B')}}
    if (board[i,j] && i === 2) { result = result || checkVecC(); if(checkVecC()){console.log('C')}}
    if (board[i,j] && j === 0) { result = result || checkVecD(); if(checkVecD()){console.log('D')}}
    if (board[i,j] && j === 1) { result = result || checkVecE(); if(checkVecE()){console.log('E')}}
    if (board[i,j] && j === 2) { result = result || checkVecF(); if(checkVecF()){console.log('F')}}
    if (board[i,j] && i === j) { result = result || checkVecG(); if(checkVecG()){console.log('G')}}
    if (board[i,j] && i + j === 2) { result = result || checkVecH(); if(checkVecH()){console.log('H')}}
    console.log(result);
    return result;
}

const restartBoard =()=>{
//     const temp =  [Array(3).fill(''), Array(3).fill(''), Array(3).fill('')];
//     board = temp;
}













module.exports ={
    sign,
    board,
    inspectionWin,
    restartBoard,
}