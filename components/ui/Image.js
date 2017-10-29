import React from 'react'
import PropTypes from 'prop-types'

const Image = props => (
  React.createElement('img', props)
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
}

export default Image
