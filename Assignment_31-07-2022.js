// ASSIGNMENT OF FUNCTIONS DATED: 31-07-2022

// Question 1. Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

// Answer No. 1
function reverse_num(a) {
  return Number(a.toString().split("").reverse().join(""));
}

// Question 2. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam,
// radar or level.

// Answer No. 2
function palindrome(b) {
  if (b === b.split("").reverse().join("")) {
    console.log(true);
    }
    else {
    console.log(false);
    }
}

// Question 3. Write a JavaScript function that generates all combinations of a string.
// Example string : 'dog'
// Expected Output : d,do,dog,o,og,g

// Answer No. 3
function combination(c) {
  var listOfStrings = [];
  for (var i = 0; i < c.length; i++) {
    for (var j = i+1; j < c.length+1; j++) {
      listOfStrings.push(c.slice(i,j));
    }
  } return listOfStrings;
}

// Question 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

// Answer No. 4
function alphaOrder(d) {
  return d.toLowerCase().split("").sort().join("");
}

// Question 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each
// word of the string in upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

// Answer No. 5
function firstCap(e) {
  var array1 = e.split(" ");
  var array2 = [];
  for (var i = 0; i < array1.length; i++) {
    array2.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
 }
 return array2.join(" ");
}

// Question 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the
// string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// Answer No. 6
function longWord(f) {
  var sentence = f.match(/\w[a-z]{0,}/gi);
  var result = sentence[0];

  for(var x = 1 ; x < sentence.length ; x++) {
    if(result.length < sentence[x].length) {
    result = sentence[x];
    } 
  }
  return result;
}

// Question 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels
// within the string.
// Example string : 'The quick brown fox'
// Expected Output : 5

// Answer No. 7
function vowelsCount(g) {
  return (g.match(/[aeiou]/gi) || []).length
}

// Question 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or
// not.
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors
// other than 1 and itself

// Answer No. 8
function isPrime(h) {
    for (var i = 2; i * i <= h; i++)
        if (h % i === 0 || h === 1)
          return false; 
    return h > 1;
}

// Question 9. Write a JavaScript function which accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and
// undefined.

// Answer No. 9
function dataType(i)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof i === "object" || typeof i === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (i instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof i;
}

// Question 10. Write a JavaScript function which will take an array of numbers stored and find the second lowest
// and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

// Answer No. 10
function secondLowestGreatest(j) {
// var j = [...new Set(j)]; OR................
var j = Array.from(new Set(j));
var n = j.sort().length;
var secondLowest = j[1];
var secondGreatest = j[n-2];
console.log(secondLowest, secondGreatest);
}
// Result of Answer No. 10
secondLowestGreatest([11,12,13,14,15,16,17,18,19,20,12,15,18,19,21,1])