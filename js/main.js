// Creare un array di oggetti: 
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
const bikes = [
    {
        nome: 'montainBike',
        peso : 50
    },
    {
        nome: 'bmx',
        peso : 40
    },
    {
        nome: 'graziella',
        peso : 20
    }
];
let lightBike = bikes[0];
for (let i = 0; i < bikes.length; i++) {
    // console.log(bikes[i]);
    if (bikes[i].peso < lightBike.peso) {
        lightBike = bikes[i];
    }
}
const {nome} = lightBike;
console.log(`${nome}`);

// BONUS: inserire una arrow function che preso in input l'array di bici ritorni l'oggetto con bici più leggera
() => {
    return lightBike
}
console.log(lightBike);