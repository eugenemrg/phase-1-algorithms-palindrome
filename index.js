function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split('').reverse('').join('')
}

/* 
  Add your pseudocode here

  1. Take the word to be tested
  2. Reverse the word to be tested so that the first character becomes the last and vice versa in that order
  3. Check if reversed word equals
  4. Return if check is true or false
*/

/*
  Add written explanation of your solution here

  1. The code returns an strict equality expression evaluation testing if the word and the reversed are equal
  2. The first operand is on the left and we just use the 'word' variable passed as parameter
  3. The second operand is on the right and we use chained methos calls
  4. We take the word, split it using `.split('')` to get an array of characters, reverse that array using `.reverse()` and join the reversed array of characters as string using `.join('')` to get the reversed word
  5. When the code is run it will return an evaluation for the truthy value of equality the word and the word reversed
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("may"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("sos"));
}

module.exports = isPalindrome;
