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

function cadastro() {
  var verificadora = 0

  if (document.getElementById('cpf').value.length < 14) {
    alert('CPF invalido')
    verificadora = parseInt(verificadora) + 1
  }
  if (document.getElementById('nome').value.length == 0) {
    alert('Campo nome vazio')
    verificadora = parseInt(verificadora) + 1
  }
  if (document.getElementById('senha').value.length < 4) {
    alert('A senha tem que ter mais de 4 digitos')
    verificadora = parseInt(verificadora) + 1
  }

  // testa se o tipo de conta foi marcado
  var teste = 0
  if (
    document.getElementById('t_conta').checked ||
    document.getElementById('t_conta2').checked
  ) {
    teste = 1
  }

  // se tudo estiver ok o programa vem para ca testa se foi marcado, se foi ele desativa os inputs da pag em HTML
  if ((verificadora == 0) & (teste == 1)) {
    document.getElementById('t_conta').disable = true
    document.getElementById('t_conta2').disabled = true
    document.getElementById('nome').disabled = true
    document.getElementById('cpf').disabled = true
    document.getElementById('senha').disabled = true
    document.getElementById('data').disabled = true
    alert(
      'Cadastro realizado com sucesso ' + document.getElementById('nome').value
    )
  } else {
    alert('Alguma informação errada ou incopleta')
  }
}

function deposito() {
  var saldo = document.getElementById('saldo').value
  var deposit = window.prompt('Digite o valor a ser depositado: ')

  if (isNaN(saldo) == false) {
    if (deposit > 0) {
      document.getElementById('saldo').value =
        parseFloat(saldo) + parseFloat(deposit)
    } else {
      alert('Não é possivel depositar o valor indicado')
    }
  } else {
    alert('Não é possivel depositar o valor indicado')
  }
}

function saque() {
  var saldo = document.getElementById('saldo').value
  var saq = window.prompt('Digite o valor a ser sacado: ')
  var verifica_senha = document.getElementById('senha').value
  var senha = window.prompt('Insira sua senha')

  if (verifica_senha == senha) {
    if (isNaN(saq) == false) {
      if ((saq > 0) & (saq <= saldo)) {
        document.getElementById('saldo').value =
          parseFloat(saldo) - parseFloat(saq)
      } else {
        alert('Não é possivel sacar o valor indicado')
      }
    } else {
      alert('Não é possivel sacar o valor indicado')
    }
  } else {
    alert('Senha incorreta')
  }
}

function alterar() {
  var verifica_senha = document.getElementById('senha').value
  var senha = window.prompt('Insira sua senha')

  if (verifica_senha == senha) {
    document.getElementById('t_conta').disable = false
    document.getElementById('t_conta2').disabled = false
    document.getElementById('nome').disabled = false
    document.getElementById('senha').disabled = false
    document.getElementById('data').disabled = false

    alert('Agora voce pode alterar seus dados cadastrais, menos o CPF ')
  } else {
    alert('Senha incorreta')
  }
}

function att_pag() {
  var confirme = confirm('Escolha uma opção!')

  if (confirme == true) {
    alert('Obrigado por usar nosso programa bancário!')
    window.location.reload()
  }
}
