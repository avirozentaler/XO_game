




let sign = "X";
const board = [Array(3).fill(''), Array(3).fill(''), Array(3).fill('')];



const checkVecA = () => { return board[0][0] === board[0][1] && board[0][1] === board[0][2] }
const checkVecB = () => { return board[1][0] === board[1][1] && board[1][1] === board[1][2] }
const checkVecC = () => { return board[2][0] === board[2][1] && board[2][1] === board[2][2] }

const checkVecD = () => { return board[0][0] === board[1][0] && board[1][0] === board[2][0] }
const checkVecE = () => { return board[0][1] === board[1][1] && board[1][1] === board[2][1] }
const checkVecF = () => { return board[0][2] === board[1][2] && board[1][2] === board[2][2] }

const checkVecG = () => { return board[0][0] === board[1][1] && board[1][1] === board[2][2] }
const checkVecH = () => { return board[0][2] === board[1][1] && board[1][1] === board[2][0] }




const inspectionWin = (i, j) => {
    let result = false;

    if (i === 0) { result = result || checkVecA();  console.log('A')}
    if (i === 1) { result = result || checkVecB(); console.log('B')}
    if (i === 2) { result = result || checkVecC(); console.log('C')}
console.log('A')
    if (j === 0) { result = result || checkVecD(); console.log('D')}
    if (j === 1) { result = result || checkVecE(); console.log('E')}
    if (j === 2) { result = result || checkVecF(); console.log('F')}
console.log('A')
    if (i === j) { result = result || checkVecG(); console.log('G')}
    if (i + j === 2) { result = result || checkVecH(); console.log('H')}
    return result;
}















module.exports ={
    sign,
    board,
    inspectionWin,
}