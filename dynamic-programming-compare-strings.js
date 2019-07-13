const compare_strings = (string_1, string_2) => {
    const cell = [];
    for (let i = 0; i < string_1.length; i++) {
        cell[i] = [];
        for (let j = 0; j < string_2.length; j++) {
            if (string_1[i] === string_2[j]) {
                let prev_value = (i === 0 || j === 0) ? 0 : cell[i-1][j-1];
                cell[i][j] = prev_value + 1;
            }
            else {
                let prev_value_1 = i === 0 ? 0 : cell[i-1][j];
                let prev_value_2 = j === 0 ? 0 : cell[i][j-1];
                cell[i][j] = Math.max(prev_value_1, prev_value_2);
            }
        }
    }
    return cell[string_1.length-1][string_2.length-1];
};

const choose_string = (test_string, options) => {
    let best_match, best_match_index;
    for (let [index, option] of options.entries()) {
        let match = compare_strings(test_string, option);
        if (best_match === undefined || best_match < match) { //chooses the first best match
            best_match = match;
            best_match_index = index;
        }
    }
    return options[best_match_index];
};

console.log(choose_string('hish', ['fish', 'vista']));
console.log(choose_string('fost', ['fish', 'fort']));
