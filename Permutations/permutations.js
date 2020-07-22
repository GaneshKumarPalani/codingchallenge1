const permutation = (inputArray) => {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
      let permutationArray = permutation(inputArray.slice(0, i).concat(inputArray.slice(i + 1)));
      if(!permutationArray.length) {
        result.push([inputArray[i]]);
      } else {
        for(let j = 0; j < permutationArray.length; j++) {
            result.push([inputArray[i]].concat(permutationArray[j]));
        }
      }
    }
    return result;
}

exports.runPremutation = (inputArray) => {
  const arrayCombination = permutation(inputArray);
  let newValue = {};
  return arrayCombination.filter(( newValue = {}, arrayValue => !(newValue[arrayValue] = arrayValue in newValue) ));
};