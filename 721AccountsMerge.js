/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */

let updateAncestor = function(ancestorMap, id, newAncestor) {
    
    while (ancestorMap[newAncestor] !== newAncestor) {
        newAncestor = ancestorMap[newAncestor];
    }
    ancestorMap[id] = newAncestor;
    // console.log('ancestorMap:',ancestorMap);
};
/*
class DSU:
    def __init__(self):
        self.p = range(10001)
    def find(self, x):
        if self.p[x] != x:
            self.p[x] = self.find(self.p[x])
        return self.p[x]
    def union(self, x, y):
        self.p[self.find(y)] = self.find(x)
*/


let union = function(ancestorMap, firstId, emailId) {
    while (ancestorMap[firstId] !== firstId ) {
        firstId = ancestorMap[firstId];
    }
    while (ancestorMap[emailId] !== emailId) {
        emailId = ancestorMap[emailId];
    }
    ancestorMap[emailId] = firstId;
    
};

let findAncestorId = function(ancestorMap, id) {
    while (ancestorMap[id] !== id) {
        id = ancestorMap[id];
    }
    return id;
};

let sortByName = function(a, b) {
    if (a[0] > b[0]) {
        return 1;
    } else if (a[0] < b[0]){
        return -1;
    } else {
        return 0;
    }
};

var accountsMerge = function(accounts) {
    let emIdMap = {};
    let emailNameMap = {};
    let ancestorMap = {};
    let idNameMap = {};
    let id = 0;
    for (let i = 0; i < accounts.length ; i++) {
        accounts[i] = [accounts[i][0]].concat(accounts[i].splice(1).sort());
    }
    console.log('accounts:',accounts);
    
    
    for (let i = 0; i < accounts.length; i++) {
        let account = accounts[i];
        for (let j = 1; j < account.length; j++) {
            let email = account[j];
            emailNameMap[email] = account[0];
            if (!emIdMap.hasOwnProperty(email)) {
                emIdMap[email] = id;
                ancestorMap[id] = id;
                idNameMap[id] = account[0];
                // console.log('email:',email);
                // console.log('emIdMap:',emIdMap);
                // console.log('ancestorMap:',ancestorMap);
                id += 1;
            }
            union(ancestorMap, emIdMap[account[1]], emIdMap[email]);
        }
    }
    console.log('finish ancestorMap:',ancestorMap);
    /* ans = collections.defaultdict(list)
        for email in em_to_name:
            ans[dsu.find(em_to_id[email])].append(email)

        return [[em_to_name[v[0]]] + sorted(v) for v in ans.values()]
    */
    let accIdMails = {};
    
    for (let email in emIdMap) {
        let id = emIdMap[email];
        let ancestorId = findAncestorId(ancestorMap, id);
        if(!accIdMails.hasOwnProperty(ancestorId)) {
            accIdMails[ancestorId] = [email];
        } else {
            accIdMails[ancestorId].push(email);
        }
    }
    let sol = [];
    // console.log('accIdMails:',accIdMails);
    // console.log('emailNameMap:',emailNameMap)
    for (let ancestorId in accIdMails) {
        // console.log('ancestorId:',ancestorId)
        sol.push([idNameMap[ancestorId]].concat(accIdMails[ancestorId].sort()));
    }
    // sol.sort(sortByName);
    // console.log('sol:',sol);
    return sol;
};


/*let checkSameEmail = function(mailList1, mailList2) {
    if (mailList1[0] !== mailList2[0]) { return [false, []]; }
    let ptr1 = 1;
    let ptr2 = 1;
    let result = [mailList1[0]];
    let flag = false;
    while (ptr1 < mailList1.length && ptr2 < mailList2.length) {
        if (mailList1[ptr1] < mailList2[ptr2]) {
            result.push(mailList1[ptr1]);
            // console.log('push mailList1[ptr1]:',mailList1[ptr1]);
            ptr1 += 1;
        } else if (mailList2[ptr2] < mailList1[ptr1]) {
            result.push(mailList2[ptr2]);
            // console.log('push mailList2[ptr2]:',mailList2[ptr2]);
            ptr2 += 1;
        } else if (mailList2[ptr2] === mailList1[ptr1]) {
            // console.log('mailList2[ptr2] === mailList1[ptr1]:',mailList1[ptr1],mailList2[ptr2])
            flag = true;
            result.push(mailList2[ptr2]);
            ptr1 += 1;
            ptr2 += 1;
        }
    }
    if (flag) {
        for (;ptr1 < mailList1.length; ptr1++) {
            result.push(mailList1[ptr1]);
        }
        for (;ptr2 < mailList2.length; ptr2++) {
            result.push(mailList2[ptr2]);
        }
    }
    // console.log('in function result:',result);
    
    if (flag) {
        return [true, result];
    } else {
        return [false, []];
    }
}
let removeRepeat = function(name, list) {
    
    let curValue = list[0];
    let cleanList = [name];
    let ptr = 0;
    while(ptr < list.length){
        cleanList.push(list[ptr]);
        curValue = list[ptr];
        while (list[ptr] === curValue) {
            ptr += 1;
        }
    }
    return cleanList;
}

let sortByName = function(a, b) {
    if (a[0] > b[0]) {
        return 1;
    } else if (a[0] < b[0]){
        return -1;
    } else {
        return 0;
    }
}

var accountsMerge = function(accounts) {
    
    for (let i = 0; i < accounts.length ; i++) {
        accounts[i] = removeRepeat(accounts[i][0], accounts[i].splice(1).sort());
    }
    console.log('accounts:',accounts);
    
    let result = [accounts[0]];
    for (let i = 1; i < accounts.length; i++) {
        // console.log('#######');
        // console.log('i:',i)
        // console.log('accounts.length:',accounts.length)
        let sameFlag = false;
        for (let j = 0; j < result.length; j++) {
            // console.log('=======');
            // console.log('accounts[i]:',accounts[i]);
            // console.log('result[j]:',result[j]);
            let same = checkSameEmail(accounts[i], result[j]);
            // console.log('same:', same);
            if (same[0]) {
                result[j] = same[1];
                sameFlag = true
            }
            // console.log('same -> result:',result);
        }
        if (!sameFlag) {
            result.push(accounts[i]);
        }
        // console.log('temp -> result:',result);
    }
    result.sort(sortByName);
    return result;
};*/