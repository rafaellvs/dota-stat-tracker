import styled from 'styled-components'
import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background: ${theme.colors.background};
  box-shadow: ${theme.boxShadow.noBreadcrumbs};
`

export const Form = styled.form`
  width: 60%;
  padding-top: 1rem;
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
