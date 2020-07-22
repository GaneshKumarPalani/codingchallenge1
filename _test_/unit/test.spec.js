const sortOddEven = require("../../SortOddEven/oddEven");
const permutation = require("../../Permutations/permutations");

describe('test for running code challenge', () => {
    
    it('return array sorted for values odd first and even next', () => {
      expect(sortOddEven.oddEvenSorting([1, 2, 4, 7, 16])).toEqual([1, 7, 2, 4, 16]);
    });

    it('return the given input value is not an array', () => {
      expect(sortOddEven.oddEvenSorting("testing")).toEqual("The input value is not an array");
    });

    it("PERMUTATION - should return permutation values which contain no duplicates", () => {
      expect(permutation.runPremutation([1, 2, 3, 3])).toEqual([
        [1, 2, 3, 3],
        [1, 3, 2, 3],
        [1, 3, 3, 2],
        [2, 1, 3, 3],
        [2, 3, 1, 3],
        [2, 3, 3, 1],
        [3, 1, 2, 3],
        [3, 1, 3, 2],
        [3, 2, 1, 3],
        [3, 2, 3, 1],
        [3, 3, 1, 2],
        [3, 3, 2, 1]
      ]);
    });

});

