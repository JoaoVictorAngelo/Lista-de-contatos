import styled from 'styled-components'

import { Props } from '.'

type PropsSemTipoEContador = Omit<Props, 'contador' | 'tipoDeFiltro'>

export const BotaoFiltro = styled.button<PropsSemTipoEContador>`
  background-color: ${(props) => (props.$ativo ? '#2b2b40' : 'transparent')};
  border: none;
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-align: left;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2b2b40;
  }
`

export const Contador = styled.span`
  background-color: #3b3b5c;
  color: #ffffff;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  font-size: 0.875rem;
`
