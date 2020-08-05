//(function (){
"use strict";


// function disemvowel(str) {
//     let userInput = str;
//     let vowels = ["a", "e", "i", "o", "u"];
//     for (let i = 0; i < str.length; i++) {
//         for (let x = 0; x < 1; x++){
//             if (i === vowels[x]){
//                 userInput.replace(i, "");
//                 return userInput;
//             }
//         }
//     }
//     return userInput;
// }
//----------------Correct Way--------------------
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
}

// g: tells to find all matches, not just the first.
//
//  i: tells to be case insensitive.
//
//---What goes inside the // is the pattern.
//
//---[] tells to match any character in a set.
//
//---aeiou are the characters in the set.
//-----------------------------------------------------------------------------------------------------

//The array is either entirely comprised of odd integers or entirely comprised of even integers except
//for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(arr){
   let odds = arr.filter(function (number) {
       return !(number % 2);
   });
   let evens = arr.filter(function (number) {
       return !!(number % 2);
   });

   let result = (odds.length < evens.length) ? odds.pop() : evens.pop();
   return result;
}



























//})();