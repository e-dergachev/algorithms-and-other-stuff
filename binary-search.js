const search = (n, arr) => {
    if (!Array.isArray(arr) || arr.length === 0) {
        return null;
    }
    let attempt, min = 0, max = arr.length - 1;
    while (min <= max) {
        attempt = Math.floor((min + max) / 2);
        if (arr[attempt] === n) {
            return attempt;
        }
        else if (arr[attempt] < n) {
            min = attempt + 1;
        }
        else {
            max = attempt - 1;
        }
    }
};

console.log(search('B', ['A', 'B', 'C', 'D']));
console.log(search('D', ['A', 'B', 'C', 'D', 'E']));
console.log(search(1, [1, 2, 3]));
console.log(search(5, [1, 2, 3, 4, 5]));
console.log(search('X', ['X']));
