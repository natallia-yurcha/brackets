function isOpenBracket(str, bracketsConfig) {
  for (bracketPair of bracketsConfig) {
    if (bracketPair[0] === str) {
      return true;
    }
  }

  return false;
}

function isOpentBracketEqualToClosed(openBracket, bracketsConfig) {
  for (bracketPair of bracketsConfig) {
    if (bracketPair[0] === openBracket && bracketPair[1] === openBracket) {
      return true;
    }
  }

  return false;
}

function getClosedBracketFor(openBracket, bracketsConfig) {
  for (bracketPair of bracketsConfig) {
    if (bracketPair[0] === openBracket) {
      return bracketPair[1];
    }
  }
}

module.exports = function check(str, bracketsConfig) {
  let openBrackets = [];
  for (let i = 0; i < str.length; i++) {
    let currentElementStr = str[i];

    if (isOpenBracket(currentElementStr, bracketsConfig)) {
      if (isOpentBracketEqualToClosed(currentElementStr, bracketsConfig)) {
        if (openBrackets[openBrackets.length - 1] === currentElementStr) {
          openBrackets.pop();
        } else {
          openBrackets.push(currentElementStr);
        }
      } else {
        openBrackets.push(currentElementStr);
      }
    } else {
      let lastOpenBracket = openBrackets.pop();
      if (getClosedBracketFor(lastOpenBracket, bracketsConfig) !== currentElementStr) {
        return false;
      }
    }
  }

  return openBrackets.length === 0
}