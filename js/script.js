'use strict';

let n = 0;

// while (n < 5) {
//     console.log(n);
//     n++;
// }

// do {
//     console.log(n);
//     n++;
// }
// while (n < 5);

for (let i = 0; i < 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}























// function changeTires(snowTires) {
//     /* демонтаж, разборртовка, забортовка, 
//     давление, балансировка, монтаж */
//     snowTires--;
//     console.log(snowTires);

//     if (snowTires > 0) {
//         changeTires(snowTires);
//     }
// }
// changeTires(4);