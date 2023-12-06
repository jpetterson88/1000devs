const calculaIdade = (req, res) => {
  const hoje = new Date(Date.now())
  const nascimento = new Date("1988-05-08")
  const idade = hoje.getFullYear() - nascimento.getFullYear()

  res.json({
      "nome": "leonardo",
      "cidade": "Vitoria ES",
      "profissao": "programador",
      "nascimento": idade
  })
}

module.exports = {
  calculaIdade
}