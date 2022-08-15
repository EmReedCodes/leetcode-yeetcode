//2103. Rings and Rods

// /**
//  * @param {string} rings
 
// * @return {number}
//  */
 var countPoints = function(rings) {
    //creating a hash to place numbered rods and the colors associated with
    let rods = {}
    //creating a loop to check each rod color pair
    for(let i = 1; i <= rings.length; i+=2){
    //created variable to hold color and rod number
     let color = rings[i - 1]
     let rodNum = rings[i]
     //if hash already contains the key rodNum, add the color to it
     if(rods.hasOwnProperty(rodNum)){
       rods[rodNum] += color
     }else{
    //if not place the rodNum as key and color as value
       rods[rodNum] = color
     }
    }
    //variable to hold amount of rods that contain R G & B 
    let countRods = 0
    //iterate through hash rods and check each to see if it contains RGB
    for(let key in rods){
     if(rods[key].includes('R') 
        && rods[key].includes('G') 
        && rods[key].includes('B')){
    //add one to variable if it contains all three
       countRods++
     }
    }
    return countRods
 };