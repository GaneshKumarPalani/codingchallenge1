const customSort = (arrayToSort) => {
    var sortFlag = false;
    while (!sortFlag) {
        sortFlag = true;
        let i = 1;
        arrayToSort.forEach(function() {
            if (arrayToSort[i - 1] > arrayToSort[i]) {
                sortFlag = false;
                [arrayToSort[i - 1], arrayToSort[i]] = [arrayToSort[i], arrayToSort[i - 1]];
            }
            i++;
        });
    }
    return arrayToSort;
}

exports.oddEvenSorting = (inputArray) => {
    if(Array.isArray(inputArray)) {
        let evens = [];
        let odds = [];
        inputArray.forEach(function(arrayValue) {
            if (arrayValue  % 2 === 0){
                evens.push(arrayValue);
            } else {
                odds.push(arrayValue);
            }
        });
        const oddnumbersArray = customSort(odds);
        const evenNumbersArray = customSort(evens);
        return oddnumbersArray.concat(evenNumbersArray);
    }
    return 'The input value is not an array';
}