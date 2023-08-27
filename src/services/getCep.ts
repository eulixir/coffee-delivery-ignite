interface getCepProps {
  neighborhood: string
  city: string
  state: string
  street: string
  cep: string
  complement: string
}

export async function getCep(cep: string): Promise<getCepProps | null> {
  let data = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then((res) =>
    res.json().then((data) => data)
  )

  if (data.erro == true) {
    return null
  }

  if (!data) {
    return null
  }

  const cepMapped = {
    neighborhood: data.bairro,
    city: data.localidade,
    state: data.uf,
    street: data.logradouro,
    cep: data.cep,
    complement: data.complemento,
  }

  return cepMapped
}
