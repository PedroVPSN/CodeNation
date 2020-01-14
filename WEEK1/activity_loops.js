// Challenge 1:__________________________________________________________________________________________________


//   If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//   Find the sum of all the multiples of 3 or 5 below 1000.

// let sum = 0

// const multiply = (num) => {
//     for (let i = 0; i < num; i++) {
//         if ((i % 3 === 0) || (i % 5 === 0) || (i % 3 === 0 && i % 5 ===0)) {
//             sum = sum + i
//         }
//     }
//     return sum
// }
// console.log(multiply(1000))





// Challenge 2:__________________________________________________________________________________________________

//   Take this string “jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh”.

//   The word “hi” appears multiple times. Find the first and last occurrence of the word hi and log them to the console.

let str = "jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh"
console.log(str.indexOf("hi"))
console.log(str.lastIndexOf("hi"))

// Challenge 3:__________________________________________________________________________________________________

// Take the string from problem 2 and print each letter out individually.

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }

// Challenge 4:__________________________________________________________________________________________________

//  Take the string from problem 2, loop through the string and find out how many times the word hi appears and the indexes where it appears.



