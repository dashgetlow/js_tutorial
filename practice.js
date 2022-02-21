// Using function, define a square function that returns the square of a number. Do the same with an analogous altSquare function using the fat arrow notation.

function square(number) {
  return number ** 2
}


let altSquare = (number) => {
  return number ** 2
}

function square(number) {
    var square;
    square = number * number;
    return square;
}

// Date

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let now = new Date();
let dayName = daysOfTheWeek[now.getDay()];
alert(`Hello, world! Happy ${dayName}.`);
</script>

// Creating the same code with a function

function dayName(date) {
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
return daysOfTheWeek[date.getDay()];
}


<!DOCTYPE html>
<html>
  <head>
    <title>Learn Enough JavaScript</title>
    <meta charset="utf-8">
    <script>
      let now = new Date();
      alert(`Hello, world! Happy ${dayName(now)}!`);
    </script>
  </head>
  <body>

  </body>
</html>



for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

We can rewrite the for-loop code above as:

array.forEach(function(element){
  console.log(element);
});

// That said, I find it helps not to pronounce “function” (whether aloud or in your head), so that it sounds like “array: for each element <do something>.”




5.4.1 Excercises

// 1. Rewrite the forEach loop in Listing 5.13 using the fat arrow notation from Section 5.1.2.

//Listing 5.3

let a = ["ant", "bat", "cat", 42];

a.forEach(function(element) {
  console.log(element);
});

//rewritten using fat arrow notation below

let a = ["ant", "bat", "cat", 42];

a.forEach(element => { console.log(element) });

--

function name(arg) {
  // code
};

// Fat arrow notation

let name = (arg) => {  code };



//2.

      let a = [8, 17, 42, 99];

    function numberCompare(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }

  ----

  let a = [8, 17, 42, 99];

  a.sort(function(a, b) { return a - b; });

// Write a function that prints the results of the above

  a.forEach(function(element) {
    console.log(element)
  });


// Using functional programming and .map to square the numbers in an Array

[1, 2, 3, 4].map(function(n) {
   return n * n;
 });

// using fat arrow notation

[1, 2, 3, 4].map((n) => { return n * n; });

// In the common case of a function of single argument, Javascript allows us to omit the curly braces and parentheses and even the return key word

[1, 2, 3, 4].map( n => n * n );

// The spacing in Javscript is irellevant!


let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"]

states.map ( state => state.toLowerCase().split(/\s+/).join("-") );

// the word "state" is a placeholder argument, and can be anything. The letter "n" would work just as well.


// Checks if string is empty OR has whitespace.

// my attempt - doesn't work

String.prototype.blank = function() {
  return String("") === String(/^\s*$/g);
}

// one solution

String.prototype.blank = function() {
  if (this.match(/^\s*$/g)) {
    return true;
  } else {
    return false;
  }
};




Array.prototype.last = function() {
  return this.slice(-1);
}
