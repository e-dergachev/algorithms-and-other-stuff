const days = {
    body: {
        0: 'Monday',
        1: 'Tuesday',
        2: 'Wednesday',
        3: 'Thursday',
        4: 'Friday',
        5: 'Saturday',
        6: 'Sunday'
    },
    [Symbol.iterator]() {
        const bodyKeys = Object.keys(this.body);
        const body = this.body;
        return {
            next() {
                if (bodyKeys.length === 0) {
                    return {
                        value: undefined,
                        done: true
                    };
                }
                let bodyKey = bodyKeys[0];
                bodyKeys.shift();
                return {
                    value: body[bodyKey],
                    done: false
                };
            }
        };
    }
}

for (let day of days) {
    console.log(day);
}
