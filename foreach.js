
// listing 5.13:
let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
  console.log(element);
});

let soliloquy = "To be or not to be, that is the question:";

Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});


//My attempt -
// array.forEach(function(soliloquy){
//   console.log(soliloquy.charAt)
// });
