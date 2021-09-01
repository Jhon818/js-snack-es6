// Snack 3
// Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
   let array = [1,2,3,4,5];

    const newArray = array.filter((element) => {
         a = 1;
         b = 3;
        if (element <= b){
            return true
        }
        else {
            return false
        }
       
       
    });
    console.log(newArray);


// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
// Usiamo i nuovi metodi degli array foreach o filter.

