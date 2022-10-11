




let board = [Array(3).fill(''), Array(3).fill(''), Array(3).fill('')];











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
    if (board[i, j] && i === 0) { result = result || checkVecA(); }
    if (board[i, j] && i === 1) { result = result || checkVecB(); }
    if (board[i, j] && i === 2) { result = result || checkVecC(); }
    if (board[i, j] && j === 0) { result = result || checkVecD(); }
    if (board[i, j] && j === 1) { result = result || checkVecE(); }
    if (board[i, j] && j === 2) { result = result || checkVecF(); }
    if (board[i, j] && i === j) { result = result || checkVecG(); }
    if (board[i, j] && i + j === 2) { result = result || checkVecH(); if (checkVecH()) { console.log('H') } }
    console.log(result);
    return result;
}






const boardFull = () => {
    let result = true;
    board.forEach((arr) => {
        arr.forEach((item) => {
            if (!item) { result = false }
        })
    })
    return result;
}








module.exports = {
    board,
    inspectionWin,
    boardFull
}