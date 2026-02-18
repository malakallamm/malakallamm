/*****************Even or Odd**********************/
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}
/****************Sum of Positives********************/
function sumOfPositives(arr) {
  return arr
    .filter(num => num > 0)
    .reduce((sum, num) => sum + num, 0);
}
/***********Sum Without the Highest and Lowest Number************/
function sumArray(arr) {
  if (!arr || arr.length < 3) return 0;

  const sorted = arr.sort((a, b) => a - b);
  return sorted.slice(1, -1).reduce((sum, num) => sum + num, 0);
}
/****************String Repeat************** */
function repeatStr(str, n) {
  return str.repeat(n);
}
/**********Convert Number to Reversed Array******************/
function digitize(n) {
  return n.toString().split("").reverse().map(Number);
}
/************Counting Sheep************/
function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length;
}
/**************Get Opposite***************/
function opposite(number) {
  return -number;
}
/***********Returning Negative*************/
function makeNegative(num) {
  return num > 0 ? -num : num;
}
/*************Jenny's Secret************/
function greet(name) {
  return name === "Johnny"
    ? "Hello, my love!"
    : `Hello, ${name}!`;
}
/***************A Needle in the Haystack***************/
function findNeedle(haystack) {
  const index = haystack.indexOf("needle");
  return `found the needle at position ${index}`;
}
////////////////////////////////////////////////////////


console.log(evenOrOdd(4)); 
console.log(evenOrOdd(7)); 


console.log(sumOfPositives([1, -2, 3, 4, -5]));


console.log(sumArray([6, 2, 1, 8, 10]));


console.log(repeatStr("malak ", 2));


console.log(digitize(35231));


console.log(countSheeps([true, true, false, true]));


console.log(opposite(5)); 
console.log(opposite(-3)); 


console.log(makeNegative(7));  
console.log(makeNegative(-5)); 


console.log(greet("Johnny"));
console.log(greet("Malak"));


console.log(findNeedle(["hello", "malak", "needle", "level"]));

