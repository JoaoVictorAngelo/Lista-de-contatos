import * as enums from '../utils/enums/TipoDeContato'

class Contato {
  nome: string
  tag: enums.TipoContato
  numero: string
  email: string
  id: number

  constructor(
    nome: string,
    tag: enums.TipoContato,
    numero: string,
    email: string,
    id: number
  ) {
    this.nome = nome
    this.tag = tag
    this.numero = numero
    this.email = email
    this.id = id
  }
}

export default Contato
