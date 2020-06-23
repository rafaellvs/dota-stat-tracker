import React from 'react'
import PropTypes from 'prop-types'

import tooltipContent from 'app/helpers/tooltips'

import Tooltip from 'app/components/core/Tooltip'

import { CoreTable } from './styled'

const findTooltip = (column) => {
  const found =
    tooltipContent.find(tooltip => tooltip.label === column)

  return found ? found.content : ''
}

const Table = ({ columns, children }) => {
  const renderColumns = () =>
    columns.map(column =>
      <th key={column}>
        <Tooltip content={findTooltip(column)}>
          {column}
        </Tooltip>
      </th>
    )

  return (
    <CoreTable>
      <thead>
        <tr>
          {renderColumns()}
        </tr>
      </thead>

      <tbody>
        {children}
      </tbody>
    </CoreTable>
  )
}

Table.propTypes = {
  columns: PropTypes.array,
  children: PropTypes.node
}

export default Table
