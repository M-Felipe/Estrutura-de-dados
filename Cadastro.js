var nome, cpf, data, senha, POUPANCA, CORRENTE
var saldo = null

function mask_cpf() {
  var n_char = document.getElementById('cpf').value.length

  if (n_char == 3) {
    document.getElementById('cpf').value += '.'
  } else if (n_char == 7) {
    document.getElementById('cpf').value += '.'
  } else if (n_char == 11) {
    document.getElementById('cpf').value += '-'
  }
}

function realizarDeposito(saldo, deposito) {
  saldo += parseFloat(deposito);
  alert('Deposito realizado com sucesso!');
  return saldo;
}

function realizarSaque(saldo, saque) {
  saque = parseFloat(saque);

  if (saque > saldo) {
    alert('Não é possível realizar o saque');
    return saldo;
  }
  saldo -= saque;
  alert('Saque realizado com sucesso!');
  return saldo;
}
