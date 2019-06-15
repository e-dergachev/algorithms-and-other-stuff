const search = (start, graph, condition) => {
    if (condition(start)) {
        return {from: start, to: start};
    }
    let search_queue = graph[start].map(el => {return {from: start, to: el}});
    let searched = [start], paths = [];
    while (search_queue.length !== 0) {
        let vertex = search_queue.shift();
        if (!searched.includes(vertex.to)) {
            paths.push(vertex);
            if (condition(vertex.to)) {
                paths.reverse();
                let path = [paths[0]], from = path[0].from;
                paths.shift();
                while (paths.length !== 0) {
                    if (paths[0].to === from) {
                        path.push(paths[0]);
                        from = paths[0].from;
                    }
                    paths.shift()
                }
                return path.reverse();
            }
            else {
                let temp = graph[vertex.to].map(el => {return {from: vertex.to, to: el}});
                search_queue = search_queue.concat(temp);
                searched = searched.concat(vertex.to);
            }
        }
    }
};

//testing the search
const test_graph = {
    you: ["alice", "bob", "claire"],
    bob: ["you", "peggy", "anuj"],
    alice: ["you", "peggy"],
    anuj: ["bob"],
    peggy: ["bob", "alice"],
    claire: ["you", "jhonny", "thom"],
    jhonny: ["claire"],
    thom: ["claire"]
}

console.log(search("anuj", test_graph, vertex => vertex === "thom"));
