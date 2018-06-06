var insertCardNumbers = prompt("Insira o número do seu cartão de crédito.");
if (insertCardNumbers === "") {
  alert("Por favor, insira o número do seu cartão de crédito.");
} else {
  isValidCard(insertCardNumbers);
}

function isValidCard(insertCardNumbers) {
  var reverseCardNumbers = [];
  for (i = 0; i < insertCardNumbers.length; i++) {
    reverseCardNumbers.unshift(parseInt(insertCardNumbers[i]));
  }

  for (j = 1; j < reverseCardNumbers.length; j = j + 2) {
    var evenPositions10 = 0;
    var otherEvenPositions = 0;

    if (reverseCardNumbers[j] * 2 >= 10) {
       reverseCardNumbers[j] - 9;
       evenPositions10 += reverseCardNumbers[j];
    } else {
      otherEvenPositions += reverseCardNumbers[j] * 2;
    }

    for (k = 0; k < reverseCardNumbers.length; k++) {
      var oddPositions = 0;
      oddPositions += reverseCardNumbers[k];
    }

    var sumOfNumbers = evenPositions10 + otherEvenPositions + oddPositions;

    if (sumOfNumbers % 10 === 0) {
      return alert("Seu cartão de crédito é válido.");
    } else {
      return alert("Seu cartão de crédito não é válido.");
    }

  }
}