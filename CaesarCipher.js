const caesarCipher = (str, num) => {
    num = num % 26;
    return str.toLowerCase().split('').map((char)=>{
        let charCode = char.charCodeAt(0);
        if (charCode <= 122 && charCode >= 97) {
            if (charCode+num>122){
                charCode = charCode-26;
                return String.fromCharCode(charCode+num);
            }
            else if (charCode+num<97){
                charCode = charCode+26;
                return String.fromCharCode(charCode+num);
            }
            else {
                return String.fromCharCode(charCode+num);
            }
        }
        else {
            return char;
        }
    }).join('');
};

function caesarCipherV(str,num) {
    num = num % 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';

    for (var i = 0; i < lowerCaseString.length; i++) {
        var currentLetter = lowerCaseString[i];
        if (currentLetter === ' ') {
            newString += currentLetter;
            continue;
        }
        var currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex;
        if (str[i] === str[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        }
        else newString += alphabet[newIndex];
    }

    return newString;
}
console.log(caesarCipherV('zoo keeper a', 1));
console.log(caesarCipher('zoo keeper a', 28));
