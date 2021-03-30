function getDiceNumber(url: string) {
  let numberOfFaces = getNumber(url);
  switch (numberOfFaces) {
    case 4:
    case 6:
    case 8:
    case 10:
    case 12:
    case 20:
      return getRandomNumber(numberOfFaces);
    default:
      return 0;
  }
}

function getNumber(url: string) {
  if (hasNumber(url)) {
    let pattern = /\d/g;

    let result = url.match(pattern).join('');

    return parseInt(result);
  }

  return 0;
}

function hasNumber(string: string) {
  return /\d/g.test(string)
}

function getRandomNumber(number: number) {
  return Math.floor(Math.random() * number + 1);
}

export default getDiceNumber;
