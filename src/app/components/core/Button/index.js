import styled from 'styled-components'

import theme from 'app/helpers/theme'

const Button = styled.button`
  width: ${({ width }) => width};
  min-width: ${({ minWidth }) => minWidth};
  background: ${theme.colors.white};
  border: none;
  padding: .5rem;
  transform: ${({ active }) => active && 'scale(1.25)'};
  transition: background .3s, font-size .3s;

  &:hover:not([disabled]) {
    background: ${theme.colors.hover};
    cursor: pointer;
  }
`

export default Button
