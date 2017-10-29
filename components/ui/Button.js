import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ onClick, children }) => (
  React.createElement('button', { onClick }, children)
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

Button.defaultProps = {
  children: 'Отправить'
}

export default Button
