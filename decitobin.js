// function find(decimal_number)
// {
//     if (decimal_number == 0)
//         return 0;
//     else
//         return ((decimal_number % 2) + 10 *
//                 find(parseInt(decimal_number / 2)));
// }
 

// var decimal_number = 10;
// console.log( find(decimal_number));



function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1, step = 1;
    while (x != 0) {
        rem = x % 2;
        console.log(
            `Step ${step++}: ${x}/2, Remainder = ${rem}, Quotient = ${parseInt(x/2)}`
        );
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    console.log(`Binary: ${bin}`);
}

// take input
let number = 5;

convertToBinary(number);