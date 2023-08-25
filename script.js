// Good Luck 💪🏾
function count(char, str) {
    // initialize a variable to store the count
    let count = 0;
    // loop through each character in the string
    for (let i = 0; i < str.length; i++) {
      // if the character matches the char, increment the count
      if (str[i] === char) {
        count++;
      }
    }
    // return the final count
    return count;
  }
console.log(count("a", "fikrcamp"))  
console.log(count("c", "bootcamp"))
console.log(count("o", "fikrcamp coding bootcamp"))
