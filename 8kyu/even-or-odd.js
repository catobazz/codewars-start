// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd(number) {
//     if (number % 2) {
//         return "Odd";
//     } else {
//         return "Even";
//     }
// }

function evenOrOdd(number) {
    return number % 2 && 'Odd' || 'Even'
}

console.log(evenOrOdd(10))