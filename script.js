function firstNonRepeatedChar(str) {
  // Create a dictionary to count the frequency of each character
  const charCount = {};

  // Traverse the string to count each character
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Traverse the string again to find the first non-repeated character
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
