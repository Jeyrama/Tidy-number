/*
A Tidy number is a number whose digits are in non-decreasing order.

Task:
  Given a number, find if it is tidy or not.

Notes:
  Number passed is always Positive.
  Return the result as a Boolean.

Examples:
  tidyNumber (12) ==> return (true)

  tidyNumber (1024) ==> return (false)

  tidyNumber (13579) ==> return (true)
*/


// Solution

const tidyNumber = n => {
  let s = n.toString();
  for (let i = 0; i < s.length-1; i++) {
    if (s[i] > s[i+1]) return false;
  }
  return true;
}