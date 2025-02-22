//Using Javascript inbuilt function
class Solution {
  reverseString(s) {
    return s.split("").reverse().join("");
  }
}

//Using for loop
class Solution {
  reverseString(s) {
    // code here
    let ch = "";
    for (let i = s.length - 1; i >= 0; i--) {
      ch = ch + s[i];
    }
    return ch;
  }
}