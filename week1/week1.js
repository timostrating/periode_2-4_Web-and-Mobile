array = ["first", "second", "last"]

for (i in array) { console.log(array[i]) }
for (i of array) { console.log(i) }
// first
// second
// last

console.log(...array)
// first second last


// Functions are first class sitizens
let mul = (a) => a*a
console.log(mul(9))
// 81


array2 = [0, "null", null, (a)=>a*a];
console.log(array2)
// [ 0, 'null', null, [Function] ]