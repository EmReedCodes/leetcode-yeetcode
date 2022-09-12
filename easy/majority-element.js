//169. Majority Element

/**
 * @param {number[]} nums
 * @return {number}
 */
//P an array of integers
//R integer -most occuring integer 
//E [2,2,3,1] -> 2
//P So I need to return which number occurs the most in the array.
//Could begin by creating a hash and iterating through nums and setting it by number in array and icrement times it was found in array as the value.
//Declaring check as a placeholder to put the largest value I find while result will hold they key to the value. 

//Speed wasn't the best here. Ill need to come back to reformat because I should have been able to do this in a single loop. 

 var majorityElement = function(nums) {
    const hashNum = {}
    for (let i = 0; i < nums.length; i++){
      const count = nums[i]
        if(hashNum.hasOwnProperty(count)){
            hashNum[count]++
        } else {
          hashNum[count] = 1
        }
    }
    
    let check = 0
    let result = ''
    for (let key in hashNum) {
      if (hashNum[key] > check) {
        check = hashNum[key]
        result = key
      }
    }
    return result
  };