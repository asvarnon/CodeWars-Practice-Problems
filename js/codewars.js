(function (){
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
// function disemvowel(str) {
//     return str.replace(/[aeiou]/gi, '');
// }

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

// function findOutlier(arr){
//    let odds = arr.filter(function (number) {
//        return !(number % 2);
//    });
//    let evens = arr.filter(function (number) {
//        return !!(number % 2);
//    });
//
//    let result = (odds.length < evens.length) ? odds.pop() : evens.pop();
//    return result;
// }


//--------------------------------------------------------------------------------
//sales tax calculator exercise

let shoppingCart = [];
function basicTax(input) {
    return (input * .10);
}
//--------
function importTax(input) {
    // exempt for food, books, medical. 10% tax
    return (input * .05);
}
//--------
function createItem(name, price, type, quantity, shoppingCart) {
    let newItem = {
        name: name,
        price: price,
        type: type,
        quantity: quantity
    }
    shoppingCart.push(newItem);
    return shoppingCart;
}
createItem("Tooth Brush", 3.00, "hygeine", 1, shoppingCart);
createItem("Harry Potter", 15.00, "book", 2, shoppingCart);
//--------
function printReceipt(shoppingCart) {
    // let exemptItemTypes = ["book", "food", "medical"];
    var itemTax = 0;
    var itemPrice = 0;
    shoppingCart.forEach(function (item) {
        // var itemTax = 0;
        // var itemPrice = 0;
        if(item.type === "book" || item.type ===  "food"|| item.type ===  "medical"){
            itemTax += parseFloat(importTax(item.price).toFixed(2));
            itemPrice += parseFloat((item.quantity * item.price).toFixed(2));
            return item.quantity + " " + item.name + ": $" + (item.quantity * item.price).toFixed(2);
        }
        itemPrice += parseFloat((item.quantity * item.price).toFixed(2));
        itemTax += parseFloat((importTax(item.price).toFixed(2) + basicTax(item.price).toFixed(2)));
        return item.quantity + " " + item.name + ": $" + ((item.price).toFixed(2) * item.quantity)
    });
    // so far it is working correctly.
    console.log("Subtotal: $" + itemPrice);
    console.log("Sales Taxes: $" + itemTax);
    console.log("Total price is: $" + (itemTax + itemPrice));

    //Works.
}























})();