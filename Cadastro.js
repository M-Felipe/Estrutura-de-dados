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
