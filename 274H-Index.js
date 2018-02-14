let sortNumber = function(a, b) {
    return b - a;
}
// O(n) counting sort 
var hIndex = function(citations) {
    let array = []
    for (let i = 0; i < citations.length + 1; i++) {
        array.push(0);
    }
    let citaLen = citations.length;
    for (let i = 0; i < citations.length; i++) {
        let cita = citations[i];
        if (cita >= citaLen) {
            array[citaLen] += 1;
        } else {
            array[cita] += 1;
        }
    }
    let count = 0;
    for (let i = citaLen; i >= 0; i--) {
        count += array[i];
        if (count >= i) {
            return i
        }
    }
    return 0;
};
// O(n log n) merge sort 
var _hIndex = function(citations) {
    citations.sort(sortNumber);
    for (let i = citations.length; i > 0; i--) {
        if (citations[i - 1] >= i) {
            return i;
        }
    }
    return 0;
};
