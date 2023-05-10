let arr = [3, 1, -2, -5, 2, -4];
let positive = [];
let negative = [];
let newArr = [];

for (let val of arr) {
    if (val > 0) {
        positive.push(val)
    }
    else { negative.push(val) };
}

for (let i = 0; i < positive.length; i++) {
    newArr.push(positive[i], negative[i]);
}

console.log(newArr);