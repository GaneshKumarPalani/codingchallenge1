function customSort(arrayToSort) {
    var sortFlag = false;
    while (!sortFlag) {
        sortFlag = true;
        for (var i = 1; i < arrayToSort.length; i += 1) {
            if (arrayToSort[i - 1] > arrayToSort[i]) {
                sortFlag = false;
                var sortedValue = arrayToSort[i - 1];
                arrayToSort[i - 1] = arrayToSort[i];
                arrayToSort[i] = sortedValue;
            }
        }
    }
    return arrayToSort;
}

exports.oddEvenSorting = (inputArray) => {
    if(Array.isArray(inputArray)) {
        let evens = [];
        let odds = [];
        for (let i = 0; i < inputArray.length; i++) {
            if (inputArray[i]  % 2 === 0){
                evens.push(inputArray[i]);
            } else {
                odds.push(inputArray[i]);
            }
        }
        var oddnumbersArray = customSort(odds);
        var evenNumbersArray = customSort(evens)
        return oddnumbersArray.concat(evenNumbersArray)
    } else {
        return 'The input value is not an array';
    }
}