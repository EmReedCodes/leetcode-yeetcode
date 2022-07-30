/**
 * @param {number[]} nums
 * @return {boolean}
 */
//P an array of numbers
//R a boolean   
//E [1,2,2,5] -> true
//P So I want to stop at the first num that has a duplicate. So I don't have to go through whole array some will stop and return true of false on the first instance. By checking if the indexOf num and lastIndexOf confirming there is a duplicate (or else theyd be the same index)

//refactoring? Need to do this with a hash

 var containsDuplicate = function(nums) {
    return nums.some((item, idx, arr) => arr.indexOf(item) !== arr.lastIndexOf(item))  
  };

containsDuplicate([1, 3, 4, 5])

  //Runtime: 7595 ms
//Memory Usage: 48.3 MB