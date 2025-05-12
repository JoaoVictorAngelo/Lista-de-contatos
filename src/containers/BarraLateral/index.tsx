import { Icon } from '../../assets/icons'
import FiltroContatos from '../../components/BotoesFiltro'
import { Container, ContainerBotao, DivInput, Input } from './styles'

const BarraLateral = () => (
  <ContainerBotao>
    <DivInput>
      <Icon name="lupaBusca" width={30} height={30} />
      <Input type="text" placeholder="Procurar Contato..." />
    </DivInput>
    <Container>
      <Icon name="todos" width={35} height={35} />
      <FiltroContatos $ativo tipoDeFiltro="Todos" contador={5} />
      <Icon name="favorito" width={35} height={35} />
      <FiltroContatos tipoDeFiltro="Favoritos" contador={2} />
      <Icon name="familia" width={35} height={35} />
      <FiltroContatos tipoDeFiltro="Familia" contador={3} />
      <Icon name="amigos" width={35} height={35} />
      <FiltroContatos tipoDeFiltro="Amigos" contador={2} />
      <Icon name="trabalho" width={35} height={35} />
      <FiltroContatos tipoDeFiltro="Trabalho" contador={1} />
    </Container>
  </ContainerBotao>
)

export default BarraLateral
