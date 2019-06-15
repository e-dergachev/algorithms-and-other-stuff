const deepEqual = (val1, val2) => {
    if (val1 === null || val2 === null) {
        return val1 === val2;
    }
    else if (typeof val1 === "object" && typeof val2 === "object") {
        let keys1 = Object.keys(val1), keys2 = Object.keys(val2);
        if (keys1.length !== keys2.length) {return false};
        for (let i = 0; i < keys1.length; i++) {
            if (!keys1.includes(keys2[i])) {return false};
            if (!deepEqual(val1[keys1[i]], val2[keys2[i]])) {return false};
        }
        return true;
    }
    else {
        return val1 === val2;
    }
}
    
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
