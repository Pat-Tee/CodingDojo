const { performance } = require('perf_hooks');
const n = process.argv.slice(2);

var isValidSudoku = function(board, boardSize=3) {
    let numCount = {'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0};
    let oneNum = '';
    let rowOffset = 0;
    let currentBoard = 0;
    let isValid = true;
    let returnValid = true;
    let outputStr = "";
    let row = 0, col = 0;

    while (currentBoard < board.length) {        
        for (let i = 0; i < boardSize; i++) {
            row = i * boardSize+rowOffset;
            col = (currentBoard % boardSize)* boardSize;
            for (let j=0; j < boardSize; j++) {
                oneNum = board[row][col+j];
                outputStr += " "+oneNum;
                numCount[oneNum]++;
                if (oneNum != '.' && numCount[oneNum] > 1) isValid = false;
            }
            outputStr+="\n";
        }

        if (!isValid) {
            outputStr += " not valid.\n";
            returnValid = false;
        } else outputStr+=" valid.\n";
        isValid = true;
        for (x in numCount) numCount[x] = 0;
        // console.log(outputStr);
        outputStr = "";
        currentBoard ++;
        if (!(currentBoard%boardSize)) {
            rowOffset++;
        } 
    }

    return returnValid;
};

var board = [   //b0          //b1         //b2          //b3           //b4        //b5          //b6          //b7         //b8
        /*0*/    [".","3",".", ".","7",".", ".",".","."], ["6",".",".", ".",".","5", ".",".","."], [".","9","8", ".",".",".", ".",".","."],
        /*3*/    ["8",".",".", ".","6",".", ".",".","3"], ["4",".",".", "8",".","3", ".",".","1"], ["7",".",".", ".","2",".", ".",".","6"],
        /*6*/    [".","6",".", ".",".",".", "2","8","."], [".",".",".", "4","1","9", ".",".","5"], [".",".",".", ".","8",".", ".","7","9"]
            ];

// var bSize = 3

let startTime = 0;
let runTime = 0;
let totalTime = 0;

for (let i=0; i < 100; i++) {
    startTime = performance.now();
    // console.log( isValidSudoku(board) );
    isValidSudoku(board);
    finishTime = performance.now();
    runTime = finishTime - startTime;
    totalTime += runTime;
}

runTime = totalTime / 100;

console.log(`average runtime: ${runTime}`);
