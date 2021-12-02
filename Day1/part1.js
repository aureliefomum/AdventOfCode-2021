const fs = require('fs');

const depths = fs.readFileSync('./part1.txt', {encoding: 'utf-8'}).split('\n').filter(x => x).map(x => +x)
//console.log(depths)
let depthIncreases = depths.map((x,i,arr) => x < arr[i+1]).filter(el=> el)
//console.log(depthIncreases)
console.log(depthIncreases.length)
