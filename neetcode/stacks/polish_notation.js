// https://leetcode.com/problems/evaluate-reverse-polish-notation/description/
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    for (let t of tokens){
        if(t == "/"){
            let d=stack.pop()
            let n=stack.pop()
            stack.push(Math.trunc(n/d))
        }
        else if(t == "*") {
            let d=stack.pop()
            let n=stack.pop()
            stack.push(n*d)
            }
        else if(t == "+") {
            let d=stack.pop()
            let n=stack.pop()
            stack.push(n+d)
            }
        else if(t == "-") {
            let d=stack.pop()
            let n=stack.pop()
            stack.push(n-d)
            } 
        else{
            stack.push(+t);
        }
    }
    return stack.pop()
};