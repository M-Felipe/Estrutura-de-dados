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
  if (document.getElementById('cpf').value.length < 14) {
    alert('CPF invalido')
  } else if (document.getElementById('nome').value.length < 1) {
    alert('Campo nome vazio')
  } else if (document.getElementById('senha').value.length < 4) {
    alert('A senha tem que ter mais de 4 digitos')
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
  if (teste == 0) {
    alert('Tipo de conta não foi selecionado')
  } else {
    document.getElementById('t_conta').disable = true
    document.getElementById('t_conta2').disabled = true
    document.getElementById('nome').disabled = true
    document.getElementById('cpf').disabled = true
    document.getElementById('senha').disabled = true
    document.getElementById('data').disabled = true
    alert(
      'Cadastro realizado com sucesso ' + document.getElementById('nome').value
    )
  }
}
