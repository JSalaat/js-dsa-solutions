//my solution O(n) // bad timing but > 280ms
const harmlessRansomNote = (actualNote, magazineTexts) => {
    console.time("JS");
    let foundAll = true;
    for( let noteWord of actualNote.split(' ') ){
        let ind = magazineTexts.lastIndexOf(noteWord);
        if (ind >= 0) {
            // magazineTexts = magazineTexts.replace(noteWord, '-');
            magazineTexts = magazineTexts.substr(0, ind) + magazineTexts.substr(ind+noteWord.length);
        }
        else {
            foundAll = false;
            break;
        }
    }
    console.timeEnd("JS");
    return foundAll;
};

//video sol linear O(n+m) // good timing but > 130ms
function harmlessRansomNoteV(noteText, magazineText) {
    console.time("V");
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var magazineObj = {};

    magazineArr.forEach(word => {
        if (!magazineObj[word]) magazineObj[word] = 0;
        magazineObj[word]++;
    });

    var noteIsPossible = true;
    noteArr.forEach(word => {
        if (magazineObj[word]) {
            magazineObj[word]--;
            if (magazineObj[word] < 0) noteIsPossible = false;
        }
        else noteIsPossible = false;
    });
    console.timeEnd("V");
    return noteIsPossible;
}

console.log(harmlessRansomNote('this is a secret note for you from a secret admirer',
    'puerto rico is a place of great wonder and excitement it has many waterfall locations that ' +
    'i am an admirer of you must hike quite a distance to find the secret secretplaces as they are far from populated areas ' +
    'but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note ' +
    'that you must wear hiking boots this is one of the best places i have ever visited'));
console.log(harmlessRansomNoteV('this is a secret note for you from a secret admirer',
    'puerto rico is a place of great wonder and excitement it has many waterfall locations that ' +
    'i am an admirer of you must hike quite a distance to find the secret secretplaces as they are far from populated areas ' +
    'but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note ' +
    'that you must wear hiking boots this is one of the best places i have ever visited'));
