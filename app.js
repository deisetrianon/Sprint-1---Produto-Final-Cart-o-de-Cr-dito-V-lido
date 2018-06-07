var insertCardNumbers = prompt("Insira o número do seu cartão de crédito.");
if (insertCardNumbers === "") {
  alert("Campo vazio! Tente novamente.");
} else {
  isValidCard(insertCardNumbers);
}

function isValidCard(insertCardNumbers){
  var reverseCardNumbers = []; 
  var finalSum = 0; 
  
  for (i = 0; i < insertCardNumbers.length; i++) {
    reverseCardNumbers.unshift(parseInt(insertCardNumbers[i]));
  }

  for (j = 0; j < reverseCardNumbers.length; j = j + 2) {
    if (j % 2 === 0) {
    reverseCardNumbers[j] = reverseCardNumbers[j] * 2;
      if (reverseCardNumbers[j] >= 10) {
      reverseCardNumbers[j] = reverseCardNumbers[j] - 9;
      }
    }

    finalSum += reverseCardNumbers[j];
  }

  if (finalSum % 10 === 0) {
    return alert("O seu cartão de crédito é válido");
  } else {
    return alert("O seu cartão de crédito é inválido");
  }
 

}
