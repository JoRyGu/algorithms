function recursiveElementCounter(collection) {
  if(typeof collection === 'number') {
    return 1;
  }

  return collection.map(element => recursiveElementCounter(element)).reduce((acc, cur) => acc + cur);
}

function palindrome(text) {
  text = text.toLowerCase();
  if(text.length === 1) {
    return true;
  }

  if(text.length === 2) {
    if(text[0] === text[1]) {
      return true;
    } else {
      return false;
    }
  }

  if (text[0] === text[text.length - 1]) {
    return palindrome(text.slice(1, text.length - 1));
  } else {
    return false;
  }
}

