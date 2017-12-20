/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {

    let wordMap = {};
    for (let i = 0; i < wordList.length; i++) {
        wordMap[wordList[i]] = true;
    }
    if (!wordMap.hasOwnProperty(endWord)) { return 0; }

    let candidates = [beginWord];
    let steps = 0;
    while (candidates.length > 0) {
        steps += 1;
        let curWords = candidates;
        candidates = [];
        for (let i = 0; i < curWords.length; i++) {
            let curWord = curWords[i];
            for (let ind = 0; ind < curWord.length; ind++) {
                let tempWord = curWord;
                for (let num = 0; num < 26; num++) {
                    let newChar = String.fromCharCode(97 + num);
                    if (newChar === curWord[ind]) { continue; }
                    tempWord = tempWord.substr(0, ind) + newChar + tempWord.substr(ind + 1);
                    if (tempWord === endWord) { return steps + 1; }
                    if (wordMap.hasOwnProperty(tempWord)) {
                        candidates.push(tempWord);
                        delete wordMap[tempWord];
                    }
                }
            }
            // console.log('candidates:',candidates);
        }
    }
    return 0;
};
