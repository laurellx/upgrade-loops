/* Usa un bucle for...of para recorrer todos los juguetes y elimina los que incluyan la palabra gato.
Recuerda que puedes usar la función.includes() para comprobarlo.
Puedes usar este array:*/

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

// for (let toy = 0; toy < toys.length; ) {
//   {
//     if (toys[toy].name.includes("gato")) {
//       toys.splice(toy, 1);
//     } else {
//       toy++;
//     }
//   }
// }
// console.log(toys);

// for (let toy = toys.length - 1; toy >= 0; toy--) {
//   {
//     if (toys[toy].name.includes("gato")) {
//       toys.splice(toy, 1);
//     }
//   }
// }
// console.log(toys);

for (let i = 0; i < toys.length; ) {
  const toy = toys[i];
  {
    if (toy.name.includes("gato")) {
      toys.splice(i, 1);
    } else {
      i++;
    }
  }
}
console.log(toys);
