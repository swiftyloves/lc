let concateStr = function(res, str) {
    let arr = []
    for (let i = 0; i < str.length; i++) {
        arr.push(res + str[i]);
    }
}
var letterCombinations = function(digits) {
    if (digits.length === 0) {
        return [];
    }
    let numCharArray = ['', '', 'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz'];
    let solArr = [""];
    for ( let i in digits) {
        let alphabets = numCharArray[parseInt(digits[i])];
        let newArr = [];
        for (let j in alphabets) {
            let character = alphabets[j];
            for (let k in solArr) { // check every existing combinations and then add this character to each one
                newArr.push(solArr[k] + character)
            }
        }
        solArr = newArr; // Replace the existing sols with new answer
    }
    return solArr;
    
};
