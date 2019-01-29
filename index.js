function scoreCalculator(arr) {
  let score = 0;
  let ifBonus = arr.every(number => {
    return number <= 5;
  });
  let youSuck = arr.every(number => {
    return number > 20;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      score += 0;
    } else if (arr[i] < 10 && arr[i] >= 5) {
      score += 5;
    } else if (arr[i] >= 0 && arr[i] < 5) {
      score += 10;
    }
  }
  if (arr.length === 0) {
    score = -1;
  } else if (ifBonus) {
    score += 100;
  } else if (youSuck) {
    return 'error you suck';
  }
  return score;
}
let array = [23];
console.log('scoreCalculator()', scoreCalculator(array));
module.exports = scoreCalculator;
