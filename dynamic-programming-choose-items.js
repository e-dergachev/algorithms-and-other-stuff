const choose_stuff = (items, resources) => {
    items = [...items]; //to protect the passed variable from mutation
    items.sort((i, j) => i[2] - j[2]);
    const step = items[0][2], cell = [];
    for (let i = 0; i < items.length; i++) {
        cell[i] = [];
        let k_map = {};
        for (let j = 0, k = step; k <= resources; j++, k += step) {
            k_map[k] = j;
            let previous_max = i === 0 ? -Infinity : cell[i-1][j][0];
            let remained_space_value = (i === 0 || k <= items[i][2]) ? 0 : cell[i-1][k_map[k - items[i][2]]][0];
            let history = [];
            if (i === 0) {
                history.push(items[i][0]);
            }
            else if (remained_space_value === 0) {
                history.push(...cell[i-1][j][1]);
            }
            else {
                history.push(...cell[i-1][k_map[k - items[i][2]]][1]);
            }
            if (previous_max < items[i][1] + remained_space_value) {
                history.push(items[i][0]);
                cell[i][j] = [items[i][1] + remained_space_value, [...new Set(history)]]; //removing duplicate values
            }
            else {
                cell[i][j] = [previous_max, [...new Set(history)]];
            }
        }
    }
    let result = cell[items.length-1];
    return result[result.length-1];
};

const items_to_pick_1 = [ //name, value, size
    ['recorder', 3000, 4],
    ['laptop', 2000, 3],
    ['guitar', 1500, 1]
];

const items_to_pick_2 = [ //name, importance, size
    ['water', 10, 3],
    ['camera', 6, 1],
    ['book', 3, 1],
    ['food', 9, 2],
    ['jacket', 5, 2],
];

const places_to_visit = [ //name, rate, time needed
    ['Westminster Abbey', 7, 0.5],
    ['The Globe Theatre', 6, 0.5],
    ['The National Gallery', 9, 1],
    ['The British Museum', 9, 2],
    ['St Paul\'s Cathedral', 8, 0.5]
];

console.log(choose_stuff(items_to_pick_1, 4));
console.log(choose_stuff(items_to_pick_2, 6));
console.log(choose_stuff(places_to_visit, 2));
