/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // // Reversing the cleaned string
  // const reversedStr = cleanStr.split('').reverse().join('');

  // // Check if the cleaned string is equal to its reverse
  // return cleanStr === reversedStr;
    let reversed="";
   let cleanstr=str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    for (let i=cleanstr.length-1; i>=0; i--){
  reversed+=cleanstr[i];
    }
    return cleanstr===reversed;
  }
  

module.exports = isPalindrome;
