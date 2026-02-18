function palindrome(word) {

  word = word.toLowerCase();

 
  word = word.split(" ").join("");

 
  let reversed = word.split("").reverse().join("");

  
  return word === reversed;
}


console.log(palindrome("hello"));      
console.log(palindrome("Level")); 

