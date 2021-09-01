// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
let serieA = [
    {name: "Inter", puntiFatti:0, falliSubiti:0},
    {name: "Juve", puntiFatti:0, falliSubiti:0},
    {name: "Milan", puntiFatti:0, falliSubiti:0}
]
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:

for (const key in serieA) {
    serieA[key].puntiFatti = Math.random()*6;
    serieA[key].falliSubiti = Math.random()*6;
    var falliSubiti = serieA[key].falliSubiti;
    var name = serieA[key].name;
}


console.log(serieA);
// Punti fatti e falli subiti.

// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

// metodo col ciclo 
// const punteggi = [];
// for(i = 0; i < serieA.length; i++){
// const {name,falliSubiti} = serieA[i];
// punteggi.push({name, falliSubiti});
// }
// console.log(punteggi)

const punteggi = [];
 punteggi.push({falliSubiti,name});
console.log(punteggi);


