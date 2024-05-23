const reverseWords = (str) => {

    return str.split(' ').map((word)=>{
        let revWord = '';
        for (let i = 0; i < word.length; i++) {
            revWord = revWord + word[word.length-1-i];
        }
        return revWord;
    }).join(' ');
};

function reverseWordsV(string) {
    var wordsArr = string.split(' ');
    var reversedWordsArr = [];

    wordsArr.forEach(word => {
        var reversedWord = '';
        for (var i = word.length - 1; i >= 0; i--) {
            reversedWord += word[i];
        }
        reversedWordsArr.push(reversedWord);
    });

    return reversedWordsArr.join(' ');
}

reverseWords('Coding JavaScript');

console.log(reverseWords("Coding JavaScript"));
