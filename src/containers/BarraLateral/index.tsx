import { useDispatch, useSelector } from 'react-redux'
import FiltroContatos from '../../components/BotoesFiltro'
import { Container, ContainerBotao, DivInput, Input } from './styles'
import { Icon } from '../../assets/icons'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/TipoDeContato'

const BarraLateral = () => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)

  return (
    <ContainerBotao>
      <DivInput>
        <Icon name="lupaBusca" width={30} height={30} />
        <Input
          type="text"
          placeholder="Procurar Contato..."
          value={termo}
          onChange={(evento) => dispatch(alterarTermo(evento.target.value))}
        />
      </DivInput>
      <Container>
        <Icon name="todos" width={35} height={35} />
        <FiltroContatos criterio="todos" tipoDeFiltro="Todos" />

        <Icon name="favorito" width={35} height={35} />
        <FiltroContatos tipoDeFiltro="Favoritos" criterio="favoritos" />

        <Icon name="familia" width={35} height={35} />
        <FiltroContatos
          valor={enums.TipoContato.FAMILIA}
          criterio="tipoTag"
          tipoDeFiltro="Familia"
        />

        <Icon name="amigos" width={35} height={35} />
        <FiltroContatos
          valor={enums.TipoContato.AMIGOS}
          criterio="tipoTag"
          tipoDeFiltro="Amigos"
        />

        <Icon name="trabalho" width={35} height={35} />
        <FiltroContatos
          valor={enums.TipoContato.TRABALHO}
          criterio="tipoTag"
          tipoDeFiltro="Trabalho"
        />
      </Container>
    </ContainerBotao>
  )
}

export default BarraLateral
