/**
 * Initialize your data structure here.
 */
var TrieNode = function() {
    this.next = {};
    this.has_word = false;
};

var Trie = function() {
    this.trie = new TrieNode();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */

/*
struct Trie {
        Trie* next[26] = {};
        bool has_word = false;
    };
    void add(Trie*& now, const char c[]) {
        if (now == NULL) {
            now = new Trie();
        }
        if (c[0] == '\0') {
            now->has_word = true;
            return;
        }
        // only lower case a-z.
        add(now->next[c[0] - 'a'], &c[1]);
    }
*/
Trie.prototype.add = function(word, trieNode) {
    if (!trieNode.next.hasOwnProperty(word[0])) {
        trieNode.next[word[0]] = new TrieNode();
    }
    if (word === "") {
        trieNode.has_word = true;
    } else {
        this.add(word.slice(1), trieNode.next[word[0]]);
    }
};

Trie.prototype.insert = function(word) {
    this.add(word, this.trie);
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.inSearch = function(word, trieNode) {
    if (!trieNode.next.hasOwnProperty(word[0])) {
        return false;
    }
    if (word.length === 0) {
        return trieNode.has_word;
    }
    return this.inSearch(word.slice(1), trieNode.next[word[0]]);
}
Trie.prototype.search = function(word) {
    return this.inSearch(word, this.trie);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.inStartWith = function(word, trieNode) {
    if (word.length === 1 && trieNode.next.hasOwnProperty(word[0])) {
        return true;
    }
    if (!trieNode.next.hasOwnProperty(word[0])) {
        return false;
    }
    return this.inStartWith(word.slice(1), trieNode.next[word[0]]);
}

Trie.prototype.startsWith = function(prefix) {
    return this.inStartWith(prefix, this.trie);
};

/* TEST
let tr = new Trie();
tr.insert('ad');
console.log('tr.trie:',tr.trie);
console.log('tr.trie.has_word:',tr.trie.has_word);
console.log('search a: ', tr.search('a'));
tr.startsWith('a');*/
/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
