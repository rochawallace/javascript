function returnEvenValues (array){
    let evenNums = [];
    for ( let i = 0; i < array.length; i++){
        if (array[i] %2 ===0 ){
            evenNums.push(array[i]);
        }

    }
    console.log(evenNums);
}


let array = [1, 2, 5, 67, 7, 9,10, 366, 4, 66698]

returnEvenValues(array);