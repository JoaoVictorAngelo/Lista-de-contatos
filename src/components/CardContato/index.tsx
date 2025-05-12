import { useState } from 'react'
import * as S from './style'
import { Icon } from '../../assets/icons'

type Props = {
  nome: string
  tag: string
  numero: string
  email: string
}

const Contato = ({ email, nome, numero, tag }: Props) => {
  const [favorito, setFavorito] = useState(false)
  const [estaEditando, setEstaEditando] = useState(false)

  const toggleFavorito = () => {
    setFavorito((prev) => !prev)
  }

  return (
    <S.Card>
      <S.HeaderContato>
        <S.NomeContato>{nome}</S.NomeContato>
        <S.IconFavorito onClick={toggleFavorito}>
          <Icon
            name={favorito ? 'favoritoSolido' : 'favorito'}
            width={35}
            height={35}
          />
        </S.IconFavorito>
      </S.HeaderContato>
      <S.Tag>{tag}</S.Tag>
      <S.NumeroContato>{numero}</S.NumeroContato>
      <S.EmailContato>{email}</S.EmailContato>
      <S.BarraAcoes>
        {estaEditando ? (
          <>
            <S.Botao>
              <Icon name="salvar" width={35} height={35} />
            </S.Botao>
            <S.Botao onClick={() => setEstaEditando(false)}>
              <Icon name="cancelar" width={35} height={35} />
            </S.Botao>
          </>
        ) : (
          <>
            <S.Botao onClick={() => setEstaEditando(true)}>
              <Icon name="editar" width={35} height={35} />
            </S.Botao>
            <S.Botao>
              <Icon name="remover" width={35} height={35} />
            </S.Botao>
          </>
        )}
      </S.BarraAcoes>
    </S.Card>
  )
}

export default Contato
