var year=2017;

// if(year%4==0){
//     console.log("leap year")
// }
// else if(year%100==0){
//     console.log("not leap year")
// }
// if(year%400==0){
//     console.log("leap year")
// }else{
//     console.log("leap year")
// }


if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year + ' is a leap year');
} else {
    console.log(year + ' is not a leap year');
}
