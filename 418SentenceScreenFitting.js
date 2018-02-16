// http://www.cnblogs.com/grandyang/p/5975426.html
// https://github.com/jzysheep/LeetCode/blob/master/418.%20Sentence%20Screen%20Fitting.cpp

var wordsTyping = function(sentenceArr, rows, cols) {
    let sentence = ""
    for (let i = 0; i < sentenceArr.length; i++) {
        sentence += sentenceArr[i] + " ";
    }
    // sentenceArr = [I, like, the, apple] ---> sentence = "I like the apple " (最後有空格, 長度 16)
    let occupiedSpace = 0;
    let wordAmount = sentenceArr.length;
    let sentenceLength = sentence.length;
    for (let i = 0; i < rows; i++) {
        occupiedSpace += cols; // 假設整排全用
        let leftSpace = occupiedSpace % sentenceLength;
        // 餘數表示用了幾個句子之後 就會是一個句子的 index
        // E.g. col 長度 20 , 句子長度 16 餘數 4 --> index 4 指到 k 
        // 第一行會是 "I like the apple I___" like 要到第二行
        // E.g. col 長度 22 , 句子長度 16 餘數 6 --> index 6 指到 空格
        // 第一行會是 "I like the apple I like_" the 要到第二行, like 後多得到一個免費的空格 所以++
        if (sentence[leftSpace] === ' ') {
            occupiedSpace++; 
        } else {
            // 要後退前先check 後退之後是不是 space, 後退之後是就不用後退了
            // 因為 indexing 從零開始關係 occupiedSpace 是 3, 用去三格 index 會是 2
            // 所以發現 index 是 2 時是空格, 就不後退了 這樣occupiedSpace 的值會是 3
            while(occupiedSpace > 0 && sentence[(occupiedSpace - 1) % sentenceLength] !== ' ') {
                occupiedSpace--; 
            }
        }

    }
    return Math.floor(occupiedSpace / sentenceLength); // 用去的格數除於句子長度=句子寫了幾次
};

console.log(wordsTyping(["hello", "world"], 3, 6));
console.log(wordsTyping(["a", "bcd", "e"], 3, 6));
