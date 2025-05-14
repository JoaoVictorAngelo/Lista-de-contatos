import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/TipoDeContato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Bianca',
      tag: enums.TipoContato.FAMILIA,
      numero: '(19) 9 9999-9999',
      email: 'teste1@teste.com',
      id: 4
    },
    {
      nome: 'Mae',
      tag: enums.TipoContato.FAMILIA,
      numero: '(19) 9 9999-8888',
      email: 'teste2@teste.com',
      id: 5
    },
    {
      nome: 'Rafael',
      tag: enums.TipoContato.TRABALHO,
      numero: '(19) 9 9999-7777',
      email: 'teste3@teste.com',
      id: 6
    },
    {
      nome: 'Sergio',
      tag: enums.TipoContato.TRABALHO,
      numero: '(19) 9 9999-6666',
      email: 'teste4@teste.com',
      id: 7
    },
    {
      nome: 'Gui',
      tag: enums.TipoContato.AMIGOS,
      numero: '(19) 9 9999-5555',
      email: 'teste5@teste.com',
      id: 8
    },
    {
      nome: 'Chris',
      tag: enums.TipoContato.AMIGOS,
      numero: '(19) 9 9999-4444',
      email: 'teste6@teste.com',
      id: 9
    },
    {
      nome: 'Pastor',
      tag: enums.TipoContato.AMIGOS,
      numero: '(19) 9 9999-3333',
      email: 'teste7@teste.com',
      id: 1
    },
    {
      nome: 'Primo',
      tag: enums.TipoContato.FAMILIA,
      numero: '(19) 9 9999-2222',
      email: 'teste8@teste.com',
      id: 2
    },
    {
      nome: 'Marcia Patroa',
      tag: enums.TipoContato.TRABALHO,
      numero: '(19) 9 9999-1111',
      email: 'teste9@teste.com',
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex((c) => c.id === action.payload.id)
      if (index >= 0) {
        state.itens[index] = action.payload
      }
    },
    alternarFavorito: (state, action: PayloadAction<number>) => {
      const index = state.itens.findIndex((c) => c.id === action.payload)
      if (index >= 0) {
        state.itens[index].favorito = !state.itens[index].favorito
      }
    }
  }
})

export const { remover, editar, alternarFavorito } = contatosSlice.actions
export default contatosSlice.reducer
