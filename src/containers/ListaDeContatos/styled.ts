import styled from 'styled-components'

export const ContainerDeCards = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 16px;
  padding: 24px;
  max-height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    display: block;
  }
`
