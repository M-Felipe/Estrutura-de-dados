///Trabalho realizado pelos integrantes
//Arthur de Almeida Guaitolini  1-1911780
//Luiza Angelo Lovo             1-1910163
//Marcos Felipe de F. Batista   1-1910125

// função para colocar pontuação automática no cpf
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

//função cadastro que verifica se os principais campos estão preenchidas
function cadastro() {
  var verificadora = 0 // verificador para as partes que foram preenchidas incorretas

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

  // se tudo estiver ok o programa vem para ca e testa se foi o marcador foi marcado e se o verificador esta zerado
  // indicando que não houve preenchimento incorreto, se foi ele desativa os inputs da pag em HTML
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

    document.getElementById('deposito').disabled = false
    document.getElementById('saque').disabled = false
    document.getElementById('alteracao').disabled = false
    document.getElementById('cancelar').disabled = false
  } else {
    alert('Alguma informação errada ou incompleta')
  }
}

//função para realizar o deposito
function depositar() {
  var saldo = document.getElementById('saldo').value
  var deposito = window.prompt('Digite o valor a ser depositado: ')

  // se for digitado alguma letra no deposito, ele da erro no if abaixo
  if (isNaN(saldo) == false) {
    //verifica se o deposito é maior que zero
    if (Number(deposito) > 0) {
      //variavel que confirma se o valor a ser depositado
      var confirme = confirm(
        'Confirma o valor depositado? Valor: R$' + deposito
      )
      if (confirme == true) {
        document.getElementById('saldo').value =
          parseFloat(saldo) + parseFloat(deposito)
        alert('Valor depositado R$' + deposito)
      }
    } else {
      alert('Não é possivel depositar o valor indicado')
    }
  } else {
    alert('Não é possivel depositar')
  }
}

//função para sacar
function sacar() {
  var verifica_senha = document.getElementById('senha').value
  var senha = window.prompt('Insira sua senha')
  var saldo = document.getElementById('saldo').value

  //verifica a senha para realizar o saque
  if (verifica_senha == senha) {
    var saque = window.prompt('Digite o valor a ser sacado: ')

    // se for digitado alguma letra no saque, ele da erro no if abaixo
    if (isNaN(saque) == false) {
      //verifica se o valor no saldo esta disponivel
      if (Number(saque) <= 0 || Number(saque) > Number(saldo)) {
        alert('Não é possivel sacar o valor indicado')
      } else {
        var confirme = confirm('Confirma o valor sacado? Valor: R$' + saque)
        if (confirme == true) {
          document.getElementById('saldo').value =
            parseFloat(saldo) - parseFloat(saque)
          alert('Valor sacado R$' + saque)
        }
      }
    } else {
      alert('Não é possivel sacar o valor indicado')
    }
  } else {
    alert('Senha incorreta')
  }
}

//função para alterar o cadastro
function alterar() {
  var verifica_senha = document.getElementById('senha').value
  var senha = window.prompt('Insira sua senha')

  //verifica se a senha colocada é a mesma para liberar a alteração
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

//função cancelar a conta
function att_pag() {
  var verifica_senha = window.prompt('Insira sua senha')
  var senha = document.getElementById('senha').value

  if (verifica_senha == senha) {
    var confirme = confirm(
      'Deseja mesmo cancelar sua conta? Escolha uma opção!'
    )
    if (confirme == true) {
      alert('Obrigado por usar nosso programa bancário!')
      window.location.reload()
    }
  } else {
    alert('Senha incorreta')
  }
}

//função para desabilitar os botões enquanto não realizar o cadastro
function botton_off() {
  document.getElementById('deposito').disabled = true
  document.getElementById('saque').disabled = true
  document.getElementById('alteracao').disabled = true
  document.getElementById('cancelar').disabled = true
}
