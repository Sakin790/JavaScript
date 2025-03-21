

 var countWords = function (words1, words2) {
    let words1Map = new Map();
    let words2Map = new Map();
  
    for (let word of words1) {
      words1Map.set(word, (words1Map.get(word) || 0) + 1);
    }
  
    for (let word of words2) {
      words2Map.set(word, (words2Map.get(word) || 0) + 1);
    }
  
    let count = 0;
  
    for (let [word, freq] of words1Map) {
      if (freq === 1 && words2Map.get(word) === 1) {
        count++;
      }
    }
  
    return count;
  };
  
  
  