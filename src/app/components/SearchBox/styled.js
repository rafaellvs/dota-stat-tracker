import styled from 'styled-components'

import CoreForm from 'app/components/core/Form'

import theme from 'app/helpers/theme'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem;
  background: ${theme.colors.background};
  box-shadow: ${theme.boxShadow.noBreadcrumbs};
`

export const Form = styled(CoreForm)`
  width: 40%;
`
