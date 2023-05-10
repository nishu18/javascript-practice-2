// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * x);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]


function modify(x, y, z) {
    x = x * 5;
    y.item = "banana";
    z = {item: "banana"};
    }
    var num = 10;
    var obj1 = {item: "apple"};
    var obj2 = {item: "appple"};
    modify(num, obj1, obj2);
    console.log(num);
    console.log(obj1.item);
    console.log(obj2.item);