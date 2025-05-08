import * as S from './styles'

export type Props = {
  $ativo?: boolean
  contador: number
  tipoDeFiltro: string
}

const FiltroContatos = ({ $ativo, contador, tipoDeFiltro }: Props) => (
  <S.BotaoFiltro $ativo={$ativo}>
    {tipoDeFiltro}
    <S.Contador>{contador}</S.Contador>
  </S.BotaoFiltro>
)

export default FiltroContatos
