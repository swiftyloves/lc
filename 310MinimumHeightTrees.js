var findMinHeightTrees = function(n, edges) {
    if (n === 0) {
        return [0];
    }
    if (n === 1) {
        return edges[0];
    }
    let edgeMap = {}
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        let first = edge[0];
        let second = edge[1];
        if (edgeMap.hasOwnProperty(first)) {
            edgeMap[first].push(second);
        } else {   
            edgeMap[first] = [second];
        }
        if (edgeMap.hasOwnProperty(second)) {
            edgeMap[second].push(first);
        } else {   
            edgeMap[second] = [first];
        }
    }
    let candidates = new Set();
    for (let e in edgeMap) {
        if (edgeMap[e].length === 1) {
            candidates.add(parseInt(e));
        }
    }
    while (1) {
        
        let final_candidates = new Set();
        candidates.forEach(function(e) {
            if (edgeMap[e].length === 1) {
                final_candidates.add(e);
            }
        });
        
        let new_candidates = new Set();
        final_candidates.forEach(function(e) {
            let neighbor = edgeMap[e][0];
            new_candidates.add(neighbor);
            edgeMap[neighbor].splice(edgeMap[neighbor].indexOf(parseInt(e)), 1);
            delete edgeMap[e];
        });
        candidates = new_candidates;

        let keys = Object.keys(edgeMap);
        if (keys.length == 1) {
            return [parseInt(keys[0])];
        }
        if (keys.length == 2) {
            return [parseInt(keys[0]), parseInt(keys[1])];
        }
    }
};
