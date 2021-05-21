//Given two strings, write a function to determine if the second
// string is an anagram of the first. An anagram is a word, phase, or name formed
// by rearranging the letters of another, such as cinema formed from iceman.

const validAnagram = (first, second) => {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (letter of first) {
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);
  for (letter of second) {
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
};

validAnagram("anagram", "nagaram");
