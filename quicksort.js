const quicksort = (arr, compare) => {
    if (arr.length < 2) {
        return arr;
    }
    else {
        const pivot = arr[0];
        const head = arr.slice(1).filter(el => compare(el, pivot));
        const tail = arr.slice(1).filter(el => !compare(el, pivot));
        return quicksort(head, compare).concat([pivot]).concat(quicksort(tail, compare));
    }
}


console.log(quicksort([3, 2, 3, 4, 1], (a, b) => a < b));
console.log(quicksort([3, 2, 4, 1, 1], (a, b) => a > b));
