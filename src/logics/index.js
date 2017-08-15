let arrays = Array.from(Array(10).keys())
let isValid = (table, x, y, checkValue) => {
    let result = true;
    //check same row
    arrays.forEach((item) => {
        if (item != x) {
            if (table[item][y] == checkValue) {
                result = false;

            }
        }


    })
    arrays.forEach((item) => {
        if (item != y) {
            if (table[x][item] == checkValue) {
                result = false;

            }
        }


    })
    return result;
    //check same column



}
var NUMBER = 9
const feasible = (S, x, y, k) => {

    var i = 0;
    var j = 0;
    for (i = 0; i < NUMBER; i++) {
        if (S[x][i] == k) return false;
    }
    for (i = 0; i < NUMBER; i++) {
        if (S[i][y] == k) return false;
    }
    var a = parseInt(x / 3);
    var b = parseInt(y / 3);
    for (i = 3 * a; i < 3 * a + 3; i++) {
        for (j = 3 * b; j < 3 * b + 3; j++) {
            if (S[i][j] == k) return false;
        }
    }
    return true;

}

export const solveSudoku = (inputData, x, y,callback,shouldContinue) => {
    if(!shouldContinue()){
        return;
    }
    var S = {...inputData}
    if (y == NUMBER) {
        if (x == NUMBER-1) {
            callback(S);
        } else {

            solveSudoku(S, x + 1, 0,callback,shouldContinue);
        }
    } else if (S['data'][x][y] == 0) {
        var k = 0;
        for (k = 1; k <= NUMBER; k++) {
            if (feasible(S['data'], x, y, k)) {
                S['data'][x][y] = k;
                solveSudoku(S, x, y + 1,callback,shouldContinue);
                S['data'][x][y] = 0;
            }
        }
    } else {
        solveSudoku(S, x, y + 1,callback,shouldContinue);
    }



}