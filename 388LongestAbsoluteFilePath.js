https://goo.gl/4Z5etk

/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    let arr = input.split('\n');
    let pathArr = [];
    let maxLength = 0;
    let currentLength = -1;
    for (let i = 0; i < arr.length; i++) {
        let file = arr[i];
        let fileNameArr = file.split("\t");
        let fileName = fileNameArr[fileNameArr.length - 1];
        let currentDepth = fileNameArr.length - 1;
        let lastDepth = pathArr.length - 1;
        for (let j = 0; j < (lastDepth - currentDepth + 1); j++) {
            let popstring = pathArr.pop();
            currentLength -= popstring.length + 1;
        }
        pathArr.push(fileName);
        currentLength += fileName.length + 1;
        if (fileName.indexOf(".") !== -1) {
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    return maxLength;
};
