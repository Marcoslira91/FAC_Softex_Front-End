// Definindo a classe Banco
class Banco {
  // Construtor da classe
  constructor(conta, saldo, tipoConta, agencia) {
    this.conta = conta;
    this.saldo = saldo;
    this.tipoConta = tipoConta;
    this.agencia = agencia;
  }

  // Método para buscar saldo
  buscarSaldo() {
    return this.saldo;
  }

  // Método para realizar depósito
  deposito(valor) {
    if (valor > 0) {
      this.saldo += valor;
      return `Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
    } else {
      return "O valor do depósito deve ser maior que zero.";
    }
  }

  // Método para realizar saque
  saque(valor) {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return `Saque de R$${valor} realizado com sucesso. Novo saldo: R$${this.saldo}`;
    } else {
      return "Saldo insuficiente ou valor inválido para saque.";
    }
  }

  // Método para gerar número da conta de 6 dígitos
  gerarNumeroConta() {
    const numeroConta = Math.floor(100000 + Math.random() * 900000);
    return numeroConta;
  }
}

// Exemplo de uso da classe Banco
const minhaConta = new Banco(null, 1000, 'Corrente', '001');

console.log(`Número da Conta: ${minhaConta.gerarNumeroConta()}`);
console.log(`Saldo Atual: R$${minhaConta.buscarSaldo()}`);
console.log(minhaConta.deposito(500));
console.log(minhaConta.saque(200));
