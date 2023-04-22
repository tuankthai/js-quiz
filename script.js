function checkAnswer(questionNumber) {
  console.log({ questionNumber })
  const answer = document.getElementById(`q${questionNumber}`).value;
  let result;
  switch (questionNumber) {
    case 1:
      result = largerNumber(4, 7) === 7;
      break;
    case 2:
      result = isPalindrome("racecar") === true;
      break;
    case 3:
      result = sumEvenNumbers([1, 2, 3, 4, 5, 6]) === 12;
      break;
    case 4:
      // result = startsWithVowel(["apple", "banana", "orange"]) === ["apple", "orange"];
      ans = startsWithVowel(["apple", "banana", "orange"]);
      expected = ["apple", "orange"];
      result = cmpTwoArr(ans, expected)  === true;
      break;
    case 5:
      result = areAnagrams("listen", "silent") === true;
      break;
    case 6:
      result = average([1, 2, 3, 4, 5, 6]) === 3.5;
      break;
    case 7:
      result = isValidEmail("test@example.com") === true;
      break;
    case 8:
      result = isDivisibleBy(10, 2) === true;
      break;
    case 9:
      ans = findPalindromes(["racecar", "hello", "level", "world"]); 
      expected = ["racecar", "level"];
      result = cmpTwoArr(ans, expected) === true;
      break;
    case 10:
      result = countWords("The quick brown fox jumps over the lazy dog") === 9;
      break;
  }
  document.getElementById(`q${questionNumber}-answer`).textContent = result === true ? "Correct!" : "Incorrect. Try again!";
  document.getElementById(`q${questionNumber}-answer`).style.display = "block"
}

function largerNumber(a, b) {
  // Starter code for Question 1
  if (a > b)
    return a
  else
    return b;
  // Write your code here
  //step 1 compare a < b
  //step 2 if true return b
  //step 3 else return a

}

function isPalindrome(str) {
  // Starter code for Question 2
  // Write your code here
  // compare every char starting from beginning to every char starting from the end
  // until I reach end of string
  // if I reach end of string, return true
  // else return false

  let i; //forward count;
  let j; //backward count;

  for (i = 0, j = str.length - 1 ; i < str.length; j--, i++){
    if (str[i] !== str[j]) {
      return false;     
    }
  }
  return true;
}

function startsWithVowel(strings) {
  // Starter code for Question 4
  const vowels = ["a", "e", "i", "o", "u"];
  const result = [];
  let i;  //index to string array
  let j; //index to array of vowels
  let k=0; //index to saved array

  //compare first char of each string in the array against the list of vowels 
  //if they starts with vowels, save the string in the result array
  for (i = 0; i < strings.length; i++){
    for (j = 0; j < vowels.length; j++){
      console.log(strings[i][0]);
      if (strings[i][0] === vowels[j]) {

        result[k] = strings[i];
        console.log(result[k]);
        k++;
        break;        
      }
    }
  }
  console.log(result)
  return result;
}

function areAnagrams(str1, str2) {
  // Starter code for Question 5
  // too difficult to understand !!!!
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

function average(numbers) {
  // Starter code for Question 6
  // let count = 0;
  let total = 0;
  let i;

  if (numbers.length === 0) {
    return 0;
  }
    
  for (i = 0; i < numbers.length; i++){
    console.log(numbers[i])
    total += numbers[i];

  }
  return total / numbers.length ;


}

function isValidEmail(email) {
  // Starter code for Question 7
  // check if there is @ sign
  // check if there is .com at the end
  // if both checks are good, return true
  // else return false
  let result1 = email.indexOf("@");
  let result2 = email.indexOf(".com");
  
  if (result1 === -1 || result2 === -1) {
    return false;
  }

  if (result1 > result2) {
    return false;
  } else {
    return true;
  }
  
}

function isDivisibleBy(num1, num2) {
  // Starter code for Question 8
  if ((num1 % num2) == 0 ) {
    return true
  }
     
    else {
    return false
  }


}

function findPalindromes(strings) {
  // Starter code for Question 9
  //loop thru the array
  //check each element of array to see if it is
  let i;
  let j = 0;
  let result = [];
  
  console.log(strings);
  for (i = 0; i < strings.length; i++) {
    if (isPalindrome(strings[i]) === true) {
      result[j] = strings[i];
      j++;      
    }
  }
  console.log(result)
  return result;

}

function countWords(str) {
  // Starter code for Question 10    
  //loop thru whole string
  //if we see a space we count 1 
  let i = 0
  let count = 0
  for (i = 0; i < str.length; i++ ){
    if (str[i] === " " ){
      count += 1;
    }
      
  }
    
  return count + 1

}

function cmpTwoArr(result, expected) {
  let i; //index to result array
  
  console.log(result);
  console.log(expected);
  if (result.length !== expected.length) {
    return false;
  }
     
  for (i = 0; i < result.length; i++){
    console.log(result[i]);
    console.log(expected[i]);
    if (result[i] !== expected[i]) {
      console.log(false);
      return false;
    }
  }
  console.log(true)
  return true;
}

function sumEvenNumbers(numArray) {
  let i;
  let total = 0;

  for (i = 0; i < numArray.length; i++){
    if (numArray[i] % 2 === 0) {
      total += numArray[i];
      
    }

  }
  return total;
}