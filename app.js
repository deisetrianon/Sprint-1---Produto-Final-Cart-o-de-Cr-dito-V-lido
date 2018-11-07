do {
  insertNumber = prompt('Insert the credit card number');
} while (!insertNumber || typeof insertNumber !== 'number');
isValidCard(insertNumber);

function isValidCard(cardnumber) {
  arr = cardnumber.split("").map( a => parseInt(a)).reverse();
  const result = arr.map( (value, index) => (index % 2 == 1) ? ((value * 2 > 9) ? value * 2 - 9 : value * 2) : value).reduce ( (value, acum) => value + acum) % 10 == 0
  result ? alert('Valid credit card number.') : alert('Invalid credit card number.')
}
