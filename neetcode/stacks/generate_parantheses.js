// https://leetcode.com/problems/generate-parentheses/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // what we need to do here
    // we start with '('
    // we multiply n with 2 for end number of valid input
    // 
    let res = [];
    let stack = []

    const addpth = (open, close) => {
        if (open === n && close === n) {
            return res.push(stack.join(''));
        }
        if(open < n){
            stack.push('(');
            addpth(open+1, close)
            stack.pop()
        }
        if(close < open) {
            stack.push(')');
            addpth(open, close+1)
            stack.pop()
        }
    }
    addpth(0,0);
    return res
};
