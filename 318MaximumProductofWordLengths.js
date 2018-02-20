let compare = function(i, j, words, mapSet) {
    let map1 = mapSet[i];
    let map2 = mapSet[j];
    for (let k in map1) {
        if (map2.hasOwnProperty(k)) {
            return 0;
        }
    }
    return words[i].length * words[j].length;
};

var maxProduct = function(words) {
    let sol = 0;
    let mapSet = [];
    for (let i = 0; i < words.length; i++) {
        let map = [];
        let word = words[i];
        for (let c in word) {
            let char = word[c];
            map[char] = true;
        }
        mapSet.push(map);
    }
    
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            sol = Math.max(sol, compare(i, j, words, mapSet));
        }
    }
    return sol;
};
