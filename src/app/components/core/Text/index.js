import styled, { css } from 'styled-components'

import theme from 'app/helpers/theme'

import CoreText from './text'

const Text = styled(CoreText)`
  padding: ${({ padding }) => padding || '0'};
  margin: 0;

  ${
    props => props.variant &&
      css`
        ${theme.variants[props.variant]}
      `
  }
`

export default Text
