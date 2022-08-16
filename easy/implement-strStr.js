/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
    //with string method includes check if 'll' is in haystack and if so give me back the first index it appears
    return haystack.includes(needle) ? haystack.indexOf(needle) : -1
  };

strStr('hello', 'll') //output: 2