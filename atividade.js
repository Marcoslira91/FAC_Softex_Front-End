try {
  // Solicitar dois números do usuário
  let numero1 = parseFloat(prompt("Digite o primeiro número:"));
  let numero2 = parseFloat(prompt("Digite o segundo número:"));

  // Tentar realizar a divisão
  if (isNaN(numero1) || isNaN(numero2)) {
    throw new Error("Digite valores numéricos válidos.");
  }

  let resultado = numero1 / numero2;

  // Verificar se o resultado é um número finito
  if (!isFinite(resultado)) {
    throw new Error("Resultado é infinito. Divisão por zero.");
  }

  // Exibir o resultado
  console.log(`O resultado da divisão é: ${resultado}`);
} catch (error) {
  // Capturar e tratar a exceção
  console.error(`Erro: ${error.message}`);
} finally {
  // Executar o bloco finally, independentemente de ter ocorrido uma exceção ou não
  console.log("Executando o bloco finally.");
}
