let Phrase = require("dashgetlow-palindrome");

let string = prompt("Please enter a string for palindrome testing:");
let phrase = new Phrase(string);

alert(new Phrase("Madam, I'm Adam.").palindrome());

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a plaindrome.`);
}
