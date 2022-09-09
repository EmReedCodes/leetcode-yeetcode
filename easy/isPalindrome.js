//wanted to try out the two point method. My thoughts were it would finish in half the time of a traditional for loop but my speed was only 37% faster 
//runtime 300ms

var isPalindrome = function (x) {
    const numArr = [...x.toString()].reverse()
    let j = numArr.length - 1
    for (let i = 0; i <= j; i++){
      const pointerOne = numArr[i]
      const pointerTwo = numArr[j]
      if (pointerOne == pointerTwo) {
              console.log(pointerOne, pointerTwo)
              j--
            } else {
              return false
            }
    }
    return true
  }
  isPalindrome(1000021)
isPalindrome(101)
  
//ok tis ran at 364ms so I guess my first thought was a bit faster

var isPalindrome = function (x) {
    const numArr = [...x.toString()].reverse()
    return numArr.join('') == x
  }
