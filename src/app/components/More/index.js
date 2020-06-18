import React from 'react'
import PropTypes from 'prop-types'

import { Link } from './styled'

const More = ({ to }) =>
  <Link to={to}>{'more >'}</Link>

More.propTypes = {
  to: PropTypes.string,
}

export default More
