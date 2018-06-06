# Cartão de Crédito Válido (Algoritmo de Luhn).

**1º)** Fiz um prompt para o usuário inserir o número de seu cartão de crédito.
- Caso o campo inserido estiver vazio, o usuário recebe uma mensagem pedindo para que ele insira o número;
- Caso o campo não estiver vazio, a função **isValidCard**, que será criada para verificar a validação do cartão, é acionada.

**2º)** Função **isValidCard**. Segue abaixo a ordem dos procedimentos inseridos na função:

  01) Criei um array vazio, chamado **reverseCardNumbers**.
    - Utilizei o método "**for**" para identificar os elementos inseridos pelo usuário;
    - Utilizei o método "**unshift**" para enviar, ao começo do array "**reverseCardNumbers**", o valor inserido pelo usuário. Dessa maneira, os números inseridos ficam em posições invertidas, promovendo a utilização do *Algoritmo de Luhn*;
    - Utilizei o método "**parseInt**" para fazer com que, o que foi inserido no prompt pelo usuário, seja considerado como um número;

  02) Utilizei o método "**for**" para identificar os números que ocupam posições pares no array.
    - Se o número ocupar uma posição par, ele é multiplicado por 2 e, se o resultado dessa multiplicação for maior ou igual a 10, os dígitos do resultado são somados (equivalente a subtrair o resultado por 9). É identificado no código como "**evenPositions10**";
    - Se o número ocupar uma posição par e, o resultado da multiplicação dele por 2 não for maior ou igual a 10, apenas a multiplicação é feita. É identificado no código como "**otherEvenPositions**";

  03) Fiz a soma final ("**sumOfNumbers**") de todos os números das posições pares e ímpares ("**oddPositions**"). Se a soma for divisível por 10, o usuário recebe a mensagem de que o seu cartão de crédito é *válido*. Caso contrário, recebe a mensagem de que o seu cartão de crédito *não é válido*. 


## Fluxograma
![Fluxograma] (Sprint1-Produto-Final-Cartao-de-Credito/Fluxograma-Cartao-de-Credito.png)


    
