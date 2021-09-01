// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// const myFunction = () => {
//     array = [1,2,3,4,5]; 
//     a = 1;
//     b = 3;
// }
//   myFunction();

//     const newArray = array.filter((element) => {
     
//         if (element > a && element < b){
//             return true
//         }
//         else {
//             return false
//         }  
//     });
//     console.log(newArray);

// versione corretta
let array = [1,2,3,4,5]; 
let a = 1;
let b = 3;

const myFunction = (array, a, b) => {
   const newArray = array.filter((element) => {
     
        if (element > a && element < b){
            return true
        }
        else {
            return false
        }  
    });
    return newArray;
}

myFunction(array, a, b);
// versione corretta
    


// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

