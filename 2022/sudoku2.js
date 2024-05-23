function sudoku2(grid){
    let mem = {};
    let res = true;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            let square = `${Math.floor(i/3)}${Math.floor(j/3)}`

            let rowStr = (mem["row"+i]=== undefined ? "" : mem["row"+i]);
            let colStr = (mem["col"+j]=== undefined ? "" : mem["col"+j]);
            let sqStr = (mem[square]=== undefined ? "" : mem[square]);
            if (grid[i][j]!=="."){
                if (rowStr.indexOf(grid[i][j]) > -1
                    || colStr.indexOf(grid[i][j]) > -1
                    || sqStr.indexOf(grid[i][j]) > -1
                ) {
                    res = false;
                    break
                }
            }

            mem["row"+i] = rowStr + grid[i][j]
            mem["col"+j] = colStr + grid[i][j]
            mem[square] = colStr + grid[i][j]
        }
    }
    return res;
}

console.log(
  sudoku2([['.', '.', '.', '1', '4', '.', '.', '2', '.'],
                ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
                ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
                ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
                ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
                ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
                ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
                ['.', '.', '.', '5', '.', '.', '.', '7', '.']])
)