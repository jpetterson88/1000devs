const calculaIdade =(req, res) => {
  const hoje = new Date(Date.now())
  const nascimento = new Date("1984-11-28")
  const idade = hoje.getFullYear() - nascimento.getFullYear()
  res.json({
      "nome": "Leonardo",
      "cidade": "Vitoria ES",
      "profissao": "Programador",
      "nascimento": idade
  })
}

module.exports = {
  calculaIdade
}