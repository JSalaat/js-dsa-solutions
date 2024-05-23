
// v won, 0
function isPalindromeV(string) {
    string = string.toLowerCase();
    var charactersArr = string.split('');
    var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var lettersArr = [];
    charactersArr.forEach(char => {
        if (char.match(/[a-z]/)) lettersArr.push(char);
    });
    return lettersArr.join('') === lettersArr.reverse().join('');
}


const isPalindrome = (text) => {
    text = text.toLowerCase().split('').filter((char)=>{
        return char.match(/[a-z]/);
    }).join('');
    return text === text.split('').reverse().join('');
};

console.log(isPalindromeV("Madam"));
// console.log(isPalindrome("Madam I'm Adam"));
