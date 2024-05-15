Question1.js

//number([[10,0],[3,5],[5,8]]) -> 5
//number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]) -> 17
//number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]) -> 21

function bus(busStops) {
    let totalPeople = 0;
    for (let i = 0; i < busStops.length; i++) {
        totalPeople += busStops[i][0];
        totalPeople -= busStops[i][1];
    }
    return totalPeople;
}

console.log(bus([[10, 0], [3, 5], [5, 8]]));
console.log(bus([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));
console.log(bus([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));

//https://github.com/CiroWasTaken/Exercice1/tree/main