function soma(a, b) {
  return a + b;
}

// Apenas para visualizar no console
if (require.main === module) {
  console.log("Servidor Node rodando...");
  console.log("Exemplo de soma:", soma(2, 3));
}

module.exports = soma;