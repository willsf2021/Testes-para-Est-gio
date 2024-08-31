// Desafio 1 ----------------------------------------------------------------//

// Número previamente definido
const numeroParaVerificar = 54;
// Função da sequência de Fibonacci
const sequenciaFibonacci = (maximo) => {
  let fibonacci = [0, 1];
  while (true) {
    let proximo =
      fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    if (proximo > maximo) break;
    fibonacci.push(proximo);
  }
  return fibonacci;
};
// Função para verificar se um número pertence à sequência de Fibonacci
const pertenceAFibonacci = (numero) => {
  const fibonacci = sequenciaFibonacci(numero);
  return fibonacci.includes(numero);
};
// Verifica se o número definido pertence à sequência de Fibonacci
if (pertenceAFibonacci(numeroParaVerificar)) {
  console.log(`${numeroParaVerificar} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numeroParaVerificar} não pertence à sequência de Fibonacci.`);
}