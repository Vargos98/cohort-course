/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: 
  - Output: 9
*/
let numbers = [3, 7, 2, 9, 1]

function findLargestElement(numbers) {
    let max= numbers[0] ;
    
    for(let i = 1 ; i<numbers.length; i++){
        if( i >= max ){
            max = numbers[i];
        }
        
    }
    console.log(max);
   
 
}

findLargestElement(numbers);

module.exports = findLargestElement;