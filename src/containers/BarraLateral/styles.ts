import styled from 'styled-components'

export const ContainerBotao = styled.aside`
  background-color: #1e1e2f;
  padding: 1rem;
  height: 100vh;
  width: 220px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`

export const DivInput = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Input = styled.input`
  height: 30px;
  width: 80%;
  margin-bottom: 15px;
  margin-top: 15px;
  padding: 10px;
  border-radius: 8px;
  border: none;
  text-align: left;
  outline: none;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  align-items: center;
`
