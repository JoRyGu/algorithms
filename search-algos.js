function dictionarySearch(word, dictionary) {
  let start = 0;
  let end = dictionary.length - 1;
  let mid = Math.floor(dictionary.length / 2);

  while(start < end) {
    if (word === dictionary[mid]) {
      return mid;
    } else if (word === dictionary[start]) {
      return start;
    } else if (word === dictionary[end]) {
      return end;
    }

    if (word < dictionary[mid]) {
      end = mid;
      mid = Math.floor((end + start) / 2);
      end--;
    } else {
      start = mid;
      mid = Math.floor((end + start) / 2);
      start++;
    }
  }

  return -1;
}

function goldfishFinder(fishType, fishTank) {
  for(let i = 0; i < fishTank.length; i++) {
    if(fishTank[i] === fishType) {
      return i;
    }
  }

  return -1;
}