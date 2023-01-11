// Usa un bucle **for** para recorrer todos los destinos del array y elimina los elementos que tengan el id 11 y 40.
// Imprime en un *** console log *** el array.
// Puedes usar este array:

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

for (let place = 0; place < placesToTravel.length; ) {
  if (placesToTravel[place].id === 11 || placesToTravel[place].id === 40) {
    placesToTravel.splice(place, 1);
  } else {
    place++;
  }
}
console.log(placesToTravel);
