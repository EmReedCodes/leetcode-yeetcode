//387. First Unique Character in a String

// P: string
// R: number (index)
// E: hello -> 0
// P: so I need to return the index of the first letter that does not have a repeat
//ill need to create a hash to account for char and count 
//but how do I want to key value them? by letter and increment if repeated? I think so ie {l:2} 
//since its first non repeating it wont matter if some are 2 and others 3 must be unique only count of 1 matters

//this seems like it would be faster no? Well really thats a no.

//  var firstUniqChar = function(s) {
//     return s.split('').findIndex((item, idx, arr) => arr.indexOf(item) === arr.lastIndexOf(item))
// };

//ok this is a little faster 

var firstUniqChar = function(s) {
    //create my hash
    let countChars = {}
    //loop through string s 
    for(let i = 0; i < s.length; i++){
      //check if character is already in countChars if so add one to value
      if(countChars.hasOwnProperty(s[i])){
      countChars[s[i]] += 1
    }else{
      //if not already placed add character and value of 1 to countchars
      countChars[s[i]] = 1
    }
  };
  //loop through countChars hash
  for(let key in countChars){
    //first time you find value less than two
    if(countChars[key] < 2){
    //return the first index of that letter in string s
     return s.indexOf(key)
    }
  }
  //if there isnt a value of less than 2 in countChars return -1
  return -1
  }
  
  
  
  
  firstUniqChar("loveleetcode") //Output: 2)