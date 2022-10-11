




let board = [Array(3).fill(''), Array(3).fill(''), Array(3).fill('')];











const checkVecA = (board) => { return board[0][0] && board[0][0] === board[0][1] && board[0][1] === board[0][2] }
const checkVecB = (board) => { return board[1][0] && board[1][0] === board[1][1] && board[1][1] === board[1][2] }
const checkVecC = (board) => { return board[2][0] && board[2][0] === board[2][1] && board[2][1] === board[2][2] }
board
const checkVecD = (board) => { return board[0][0] && board[0][0] === board[1][0] && board[1][0] === board[2][0] }
const checkVecE = (board) => { return board[0][1] && board[0][1] === board[1][1] && board[1][1] === board[2][1] }
const checkVecF = (board) => { return board[0][2] && board[0][2] === board[1][2] && board[1][2] === board[2][2] }
board
const checkVecG = (board) => { return board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2] }
const checkVecH = (board) => { return board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0] }




const inspectionWin = (board,i, j) => {
    let result = false;
    if (board[i, j] && i === 0) { result = result || checkVecA(board); }
    if (board[i, j] && i === 1) { result = result || checkVecB(board); }
    if (board[i, j] && i === 2) { result = result || checkVecC(board); }
    if (board[i, j] && j === 0) { result = result || checkVecD(board); }
    if (board[i, j] && j === 1) { result = result || checkVecE(board); }
    if (board[i, j] && j === 2) { result = result || checkVecF(board); }
    if (board[i, j] && i === j) { result = result || checkVecG(board); }
    if (board[i, j] && i + j === 2) { result = result || checkVecH(board); }
    console.log(result);
    return result;
}






const boardFull = (board) => {
    console.log(board);
    let result = true;
    board.forEach((arr) => {
        arr.forEach((item) => {

            if (!item) {
                 result = false 
                }
        })
    })
    console.log(`result >> ${result}`)
    return result;
}








module.exports = {
    board,
    inspectionWin,
    boardFull
}