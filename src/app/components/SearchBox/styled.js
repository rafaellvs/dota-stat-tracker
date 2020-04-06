import styled from 'styled-components'
import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-self: center;
  padding: 2rem;
  background: ${theme.colors.background};
  box-shadow: 10px 0px 20px 10px rgba(0,0,0,0.75);
  width: 500px;
  height: auto;
  z-index: 5;
`
