// Problem 7: Count Vowels in a String

const countVowel = (str) => {
  const strArray = str.toLowerCase().split("");
  const vowel = "aeiou";
  const matchedVowel = strArray.filter((i) => {
    return vowel.includes(i);
  });
  return matchedVowel.length;
};


console.log(countVowel("shakib"));
