import styled from 'styled-components'
import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  padding: 0 2rem 2rem;
  background: ${theme.colors.background};
`

export const Form = styled.form`
  width: 60%;
`

export const Input = styled.input`
  width: 100%;
  margin-top: 1rem;
`

export const Submit = styled.input`
  display: block;
  width: 100%;
  margin-top: 1rem;
`
