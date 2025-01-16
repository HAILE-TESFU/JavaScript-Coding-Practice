function isPangram(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const normalizedSentence = string.toLowerCase().replace(/[^a-z]/g, '');
  console.log(normalizedSentence)
  for(let char of alphabet){
    if(!normalizedSentence.includes(char)){
        return false
    }
  }
return true
}

const string1 = "The quick brown fox jumps over the lazy dog";
console.log(isPangram(string1));
