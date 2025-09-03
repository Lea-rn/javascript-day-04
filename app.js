"use strict";

/////// function calling other function :::

////// first exemple :

// const cutPieces = (fruit) => fruit * 4;

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutPieces(apples);  /// 20
//   const orangesPieces = cutPieces(oranges);  //// 80
//   let juice = `juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges`;
//   console.log(juice)
// }

// fruitProcessor(5 , 20 )

/////// second exemple :::

// const now  = 2025 ;

// const calcAge = function (birthYear){
//   return now - birthYear ///30
// }

// function yearsUntilRetirement (birthYear , firstName){

//     const age = calcAge(birthYear)  //30
//     const retirement = 60 - age   //// 30

//     if (retirement > 0) {
//         const message = `${firstName} retires in ${retirement} years`
//         return message
//     }
//     else {
//     return `${firstName} has already retires ..................`
//     }

// }

// console.log(yearsUntilRetirement(1995 , "ali"))
// console.log(yearsUntilRetirement(1960 , "peter"))

///// challange 1 (fundamentals part2) :

///1
// const calcAverage = (a, b, c) => (a + b + c) / 3; ///// generic function
// //2
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 154, 149);

// console.log("dolphins : ", scoreDolphins, "koalas : ", scoreKoalas);

// ///3

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas}) `);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins}) `);
//   } else {
//     console.log("No team wins");
//   }
// };

// checkWinner(scoreDolphins, scoreKoalas);


/////// array (data structure) : /// {} ===> curly braces ; curly brackets
///// methods : .length ; .push , .unshift , .pop , shift

const freind1 = "steven" ; 
const freind2 = "peter" ; 
const freind3 = "jessica" ; 



///////// syntaxe :  arrayName[index]
///// arrays are 0 based and immutable .... 





// const freinds = ["steven" , "peter" , "jessica","hamadi" ,"ali" ,"yahya" ] ; 
 
// console.log(freinds[2])
// console.log(freinds.length)


///// to get the last position
// console.log(freinds)
// console.log(freinds[freinds.length-1])


//////// to add new data (push , unshift) : 

// const freinds = ["steven" , "peter" , "jessica","hamadi" ]

// console.log(freinds)

// freinds.push("paul")   //// tzid fel lekher ... 
// console.log(freinds)

// freinds.unshift("mohamed")   ///// tzid meloul
// console.log(freinds)

///////////  to delete data (pop , shift)  ====> 

    // const freinds = ["steven" , "peter" , "jessica","hamadi" ]

    // console.log(freinds)

    // freinds.pop()   ///// tfasakh mel lekher ...
    // console.log(freinds)

    // freinds.shift()  ///// tfasakh meloul ..... 
    // console.log(freinds)



    ///////////////// includes (return boolean) : 
//     const numbers = [200,100,500,250] ; 

// console.log(numbers.includes(10))
// console.log(numbers.includes(200))

//////// indexOf ===> tlawij al index :: 

// const numbers = [200,100,500,250,2000 ,6000] ; 
// console.log(numbers.indexOf(250))


/////////// how to make modification : 

// const freinds = ["steven" , "peter" , "jessica","hamadi" ]
// console.log(freinds)

// freinds[1] = true
// console.log(freinds)
