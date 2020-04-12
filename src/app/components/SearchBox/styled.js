import styled from 'styled-components'

import CoreForm from 'app/components/core/Form'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
  background: ${theme.colors.background};
  box-shadow: 10px 0px 20px 10px rgba(0,0,0,0.75);
  z-index: 5;
`

export const Form = styled(CoreForm)`
  width: 40%;
`
