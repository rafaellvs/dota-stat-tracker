import React from 'react'
import PropTypes from 'prop-types'

import { CoreTable } from './styled'

const Table = ({ columns, children }) => {
  const renderColumns = () =>
    columns.map(column =>
      <th key={column}>
        {column}
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
