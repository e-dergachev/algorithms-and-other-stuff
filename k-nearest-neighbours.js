k_nearest_prediction = (point, neighbours, k) => { //finds k nearest (classification) and predicts the value (regression)
    let distances = [];
    for (let [index, neighbour] of neighbours.entries()) {//distance is calculated by the formula of distance between two points
        let distance = (neighbour.traits.map((t, i) => (t - point.traits[i])**2).reduce((a, v) => a + v))**0.5;
        distances.push([index, distance]);
    }
    distances = distances.sort((a, b) => a[1] - b[1]).slice(0, k); //could avoid using the sort if needed
    let value = 0;
    for (let d of distances) {
        value += neighbours[d[0]].value;
    }
    value /= k;
    return value;
};

const neighbours_1 = [
    {traits: [5, 1, 0], value: 300},
    {traits: [1, 1, 0], value: 75},
    {traits: [4, 0, 0], value: 150},
    {traits: [3, 1, 1], value: 225},
    {traits: [4, 0, 1], value: 200},
    {traits: [2, 0, 0], value: 50}
];

console.log(k_nearest_prediction({traits: [4, 1, 0]}, neighbours_1, 4));
