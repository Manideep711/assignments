/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
   let cleanstr=str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
   let count=0;
    for(let i=0;i<=cleanstr.length;i++){
      if(cleanstr[i]=='a'|cleanstr[i]=='e'|cleanstr[i]=='i'|cleanstr[i]=='o'|cleanstr[i]=='u'){
        count++
      }
    }
    return count
}

module.exports = countVowels;