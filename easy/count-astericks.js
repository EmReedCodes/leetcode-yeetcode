// /**
//  * @param {string} s
//  * @return {number}
//  */



 //P string
 //R integar
 //E y*|goo*|**h|*f|f -> 3
 //P need to count * excluding whats in between each bar pair

 //so I was almost there with this one. After I was done looking at other solutions my thought process was close but I need to learn to incorporate booleans into my varuables and using them.

var countAsterisks = function(s) {
    //counting my astericks
    let count = 0
    let noBars = ''
    for(let i = 0; i < s.length; i++){
      if(s[i] == '|' && !noBars.lengh){
        //adding | to this string so I can check for the next
        noBars += '|'
      }
      //if I hit another bar and there already is one in noBars reset it
      else if(s[i] == '|' && noBars.length > 0){
        noBars = ''
      }
      //now when there is no bar in noBar go ahead and count the *
      if(!noBars.length && s[i] == '*'){
        count++
      }
    }
    return count
};

//top rated solution below labelled red light green light makes total sense and a lot more clean than mine 
 
//   var countAsterisks = function(s) {
//     let green=true, count=0;
//     for(let i=0; i<s.length; i++){
//         if(green && s[i]=="*"){count++};
//         if(s[i]=="|"){green=!green};
//     }
//     return count;
//   };
  
  countAsterisks("l|*e*et|c**o|*de|")//2