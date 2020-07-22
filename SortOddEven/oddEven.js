function customSort(arrayToSort) {
    var sortFlag = false;
    while (!sortFlag) {
        sortFlag = true;
        for (var i = 1; i < arrayToSort.length; i += 1) {
            if (arrayToSort[i - 1] > arrayToSort[i]) {
                sortFlag = false;
                [arrayToSort[i - 1], arrayToSort[i]] = [arrayToSort[i], arrayToSort[i - 1]];
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
        const oddnumbersArray = customSort(odds);
        const evenNumbersArray = customSort(evens)
        return oddnumbersArray.concat(evenNumbersArray)
    }
    return 'The input value is not an array';
}