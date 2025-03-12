/*
const a = [1, 2, 3, 4];
const b = [2, 0, 3, 5];
const c = a * b;
console.log("Sua conta é", c);
console.log("Vetor A", a);
console.log("Vetor B", b);
*/

/*
let d = Array.of(1, 2, 3);
console.log(d)
*/

//matriz
/*let a = [
  [0, 1, 2],
  [2, 3, 4],
  [6, 0, 7],
];

console.log(a[1][2]);
*/

/*h = [1, 2, 3, 4, 5, 6];
console.log(h, (length = 3));
*/

//usando a tag push para adicionar um elemento no final do array.
/*let a = [1, 3, 5, 7, 10];
a.push(2);

console.log("vetor:", a);
*/

/*let a = [1, 3, 5, 7, 10];
a.unshift("a");
a.unshift(0, -1);

console.log("vetor:", a);
*/

/*
let a = [1, 3, 5, 7, 10];''''''
//a.pop(); Elimina o final
a.shift(); //Elimina o inicio
console.log("vetor:", a);
*/

//usando concat para reunir várias Arrays
let a = [1, 2];
let b = [0, 3];

let c1 = a.concat(b);
let c2 = b.concat(a);

console.log(c1);
console.log(c2);
console.log(c2, sort());
