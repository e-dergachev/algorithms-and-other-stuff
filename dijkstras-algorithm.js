const find_lowest_cost_node = (costs, processed) => {
    let lowest_cost = Infinity, lowest_cost_node = undefined;
    for (let node of Object.keys(costs)) {
        let cost = costs[node];
        if (cost < lowest_cost && !processed.includes(node)) {
            lowest_cost = cost;
            lowest_cost_node = node;
        }
    }
    return lowest_cost_node;
};

const search = (graph, costs, parents) => {
    const processed = [];
    let node = find_lowest_cost_node(costs, processed);
    while (node !== undefined) {
        let cost = costs[node];
        let neighbors = graph[node];
        for (let n of Object.keys(neighbors)) {
            let new_cost = cost + neighbors[n];
            if (costs[n] > new_cost) {
                costs[n] = new_cost;
                parents[n] = node;
            }
        }
        processed.push(node);
        node = find_lowest_cost_node(costs, processed);
    }
    const res = ["finish"];
    let child = parents["finish"];
    res.push(child); //it's assumed that the graph has at least two nodes
    while (child !== "start") {
        child = parents[child];
        res.push(child);
    }
    return res.reverse();
};


const test_graph = {
    start: {a: 6, b: 2},
    a: {finish: 1},
    b: {a: 3, finish: 5},
    finish: {}
};

const test_graph_costs = {
    a: 6,
    b: 2,
    finish: Infinity
};

const test_graph_parents = {
    a: "start",
    b: "start",
    finish: undefined
}

console.log(search(test_graph, test_graph_costs, test_graph_parents));
