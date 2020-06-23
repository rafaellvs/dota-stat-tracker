import React from 'react'
import PropTypes from 'prop-types'

const Text = ({ component, variant, ...restProps }) =>
  React.createElement(component || 'p', { ...restProps })

Text.propTypes = {
  component: PropTypes.string,
  variant: PropTypes.string,
}

export default Text
