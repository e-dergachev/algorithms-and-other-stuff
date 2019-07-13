const find_stations = (states_needed, stations) => {
    const final_stations = [];
    while (states_needed.length !== 0) {
        let best_station, states_covered = [];
        for (station of stations) {
            let covered = station[1].filter(s => states_needed.includes(s));
            if (covered.length > states_covered.length) {
                best_station = [...station];
                states_covered = [...covered];
            }
        }
        final_stations.push(best_station);
        states_needed = states_needed.filter(s => !states_covered.includes(s));
    }
    return final_stations;
};

const states_needed = ['mt', 'wa', 'or', 'id', 'nv', 'ut', 'ca', 'az'];
const stations = [
    ['kone', ['id', 'nv', 'ut']],
    ['ktwo', ['wa', 'id', 'mt']],
    ['kthree', ['or', 'nv', 'ca']],
    ['kfour', ['nv', 'ut']],
    ['kfive', ['ca', 'az']]
];

console.log(find_stations(states_needed, stations));
