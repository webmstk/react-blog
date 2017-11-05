import React from 'react'
import PropTypes from 'prop-types'

const TextBox = ({ children }) => <p>{children}</p>

TextBox.propTypes = {
  children: PropTypes.string
}

export default TextBox
