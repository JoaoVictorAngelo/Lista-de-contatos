import { Icon } from '../../assets/icons'
import FiltroContatos from '../../components/BotoesFiltro'
import { ContainerBotao, DivInput, Input } from './styles'

const BarraLateral = () => (
  <ContainerBotao>
    <DivInput>
      <Icon name="lupaBusca" width={30} height={30} />
      <Input type="text" placeholder="Procurar Contato..." />
    </DivInput>
    <FiltroContatos $ativo tipoDeFiltro="Todos" contador={5} />
    <FiltroContatos tipoDeFiltro="Favoritos" contador={2} />
    <FiltroContatos tipoDeFiltro="Familia" contador={3} />
    <FiltroContatos tipoDeFiltro="Amigos" contador={2} />
    <FiltroContatos tipoDeFiltro="Trabalho" contador={1} />
  </ContainerBotao>
)

export default BarraLateral
