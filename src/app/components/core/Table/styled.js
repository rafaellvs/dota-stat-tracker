import styled from 'styled-components'

import theme from 'app/helpers/theme'

export const CoreTable = styled.table`
  border-collapse: collapse;
  color: ${theme.colors.white};

  th, td {
    text-align: left;
    padding: .5rem .8rem;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      padding-right: 0;
    }

    &:last-child[id='when'] {
      width: 1%;
      white-space: nowrap;
    }
  }

  tbody {
    tr {
      transition: background .3s;
      
      &:hover {
        background: ${theme.colors.hover};
        cursor: pointer;
      }
    }
  }
`
