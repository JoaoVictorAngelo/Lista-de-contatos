import Contato from '../../components/CardContato'
import { ContainerDeCards } from './styled'

const contatos = [
  {
    nome: 'Bianca',
    tag: 'Familia',
    numero: '(19) 9 9999-9999',
    email: 'teste1@teste.com'
  },
  {
    nome: 'Mae',
    tag: 'Familia',
    numero: '(19) 9 9999-8888',
    email: 'teste2@teste.com'
  },
  {
    nome: 'Rafael',
    tag: 'Trabalho',
    numero: '(19) 9 9999-7777',
    email: 'teste3@teste.com'
  },
  {
    nome: 'Sergio',
    tag: 'Trabalho',
    numero: '(19) 9 9999-6666',
    email: 'teste4@teste.com'
  },
  {
    nome: 'Gui',
    tag: 'Amigos',
    numero: '(19) 9 9999-5555',
    email: 'teste5@teste.com'
  },
  {
    nome: 'Chris',
    tag: 'Amigos',
    numero: '(19) 9 9999-4444',
    email: 'teste6@teste.com'
  }
]

const ListaDeContatos = () => (
  <ContainerDeCards>
    {contatos.map((t) => (
      <Contato
        key={t.email}
        nome={t.nome}
        email={t.email}
        numero={t.numero}
        tag={t.tag}
      />
    ))}
    <p>2 Contatos marcados como: "categoria" e "termo"</p>
  </ContainerDeCards>
)

export default ListaDeContatos
