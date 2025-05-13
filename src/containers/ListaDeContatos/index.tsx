import { useSelector } from 'react-redux'

import Contato from '../../components/CardContato'
import { ContainerDeCards } from './styled'
import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <ContainerDeCards>
      {itens.map((t) => (
        <Contato
          key={t.email}
          id={t.id}
          nome={t.nome}
          email={t.email}
          numero={t.numero}
          tag={t.tag}
        />
      ))}
      <p>2 Contatos marcados como: "categoria" e "termo"</p>
    </ContainerDeCards>
  )
}

export default ListaDeContatos
