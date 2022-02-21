let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]


// function urlify(string) {
//   return string.toLowerCase().split(/\s+/).join("-");
// }
//
// function appendURLs(elements) {
//   return elements.map(element => "https://www.example.com/" + urlify(element));
// }
//   console.log(appendURLs(states));


  // // singles: Functional version
  //
  // function functionalSingles(elements) {
  //   return states.filter(state => state.split(/\s+/).length === 1);
  // }
  // console.log(functionalSingles(states));


// Exercise 6.2.1
//
// 1.
//
// function functionalDoubles(elements) {
//   return states.filter(state => state.split(/\s+/).length === 2);
// }
// console.log(functionalDoubles(states));
//
// 2.
//
// function functionalDoubles(elements) {
//   return states.filter(state => state.includes("Dakota");
// }
// console.log(functionalDoubles(states));



// Exercise 6.3.4

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
// function imperativeSum(elements) {
//   let total = 0;
//   elements.forEach(function(n) {
//     total += n;
//   });
// return total;
// }
// console.log(imperativeSum(numbers));

// // sum: Functional solution
//   function functionalMultiply(elements) {
//     return elements.reduce((total, n) => { return total *= n; });
//   }
// console.log(functionalMultiply(numbers));


// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => { lengths[element] = element.length; return lengths }, {});
}
console.log(functionalLengths(states));
