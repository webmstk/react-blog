import React from 'react'
import PropTypes from 'prop-types'

const TextBox = ({ children }) => (
  React.createElement('span', null, children)
)

TextBox.propTypes = {
  children: PropTypes.string
}

export default TextBox
