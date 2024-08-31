// String a ser verificada
const stringParaVerificar =
  "Esta frase contém várias letras 'a' para serem verificadas.";

// Função para contar a ocorrência da letra 'a'
const contarLetraA = (frase) => {
  let contagem = 0;
  // Converte a frase para minúsculas para facilitar a contagem
  const fraseMinuscula = frase.toLowerCase();
  // Itera por cada caractere da string
  for (let i = 0; i < fraseMinuscula.length; i++) {
    // Verifica se o caractere é 'a'
    if (fraseMinuscula[i] === "a") {
      contagem++;
    }
  }
  return contagem;
};

// Verifica a ocorrência da letra 'a' e exibe o resultado
const quantidadeA = contarLetraA(stringParaVerificar);

if (quantidadeA > 0) {
  console.log(
    `A letra 'a' (maiúscula ou minúscula) ocorre ${quantidadeA} vezes na string.`
  );
} else {
  console.log(
    "A letra 'a' (maiúscula ou minúscula) não ocorre na string informada."
  );
}
