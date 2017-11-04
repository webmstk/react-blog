import React from 'react'
import PropTypes from 'prop-types'

const TextBox = ({ children }) => (
  React.createElement('p', null, children)
)

TextBox.propTypes = {
  children: PropTypes.string
}

export default TextBox
