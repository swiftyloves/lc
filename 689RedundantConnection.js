/**
 * @param {number[][]} edges
 * @return {number[]}
 */
let union = function(node1, node2, nodeAncestorMap) {
    while (nodeAncestorMap[node1] !== node1) {
        node1 = nodeAncestorMap[node1]
    }
    while (nodeAncestorMap[node2] !== node2) {
        node2 = nodeAncestorMap[node2]
    }
    nodeAncestorMap[node2] = node1;
}

let findAncestor = function(node, nodeAncestorMap) {
    while(nodeAncestorMap[node] !== node) {
        node = nodeAncestorMap[node];
    }
    return node;
};

var findRedundantConnection = function(edges) {
    let nodeAncestorMap = {}
    for (let i = 0; i < edges.length; i++) {
        let edge = edges[i];
        
        if (nodeAncestorMap.hasOwnProperty(edge[0]) && nodeAncestorMap.hasOwnProperty(edge[1]) && findAncestor(edge[0], nodeAncestorMap) === findAncestor(edge[1], nodeAncestorMap)) {
            return edge;
        }
        for (let j = 0; j < edge.length; j++){
            if (!nodeAncestorMap.hasOwnProperty(edge[j])) {
                nodeAncestorMap[edge[j]] = edge[j];
            }
        }
        union(edge[0], edge[1], nodeAncestorMap);
    }
    
};
