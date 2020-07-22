function permutation(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i = i + 1) {
      let permutationArray = permutation(inputArray.slice(0, i).concat(inputArray.slice(i + 1)));
      if(!permutationArray.length) {
        result.push([inputArray[i]])
      } else {
        for(let j = 0; j < permutationArray.length; j = j + 1) {
            result.push([inputArray[i]].concat(permutationArray[j]))
        }
      }
    }
    return result;
}

exports.runPremutation = (inputArray) => {
  var arrayCombination = permutation(inputArray);
  let newArray = {};
  var removeDuplicateArray = arrayCombination.filter(( newArray, arrayValue => !(newArray[arrayValue] = arrayValue in newArray) ));
  return removeDuplicateArray;
};