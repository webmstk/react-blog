import React, { createElement } from 'react'
import PropTypes from 'prop-types'

import Button from '../ui/Button'

const Like = ({ rating, like }) => (
  createElement('div', null,
    createElement('span', null, rating),
    createElement(Button, { onClick: like }, 'Like')
  )
)

Like.propTypes = {
  like: PropTypes.func.isRequired,
  rating: PropTypes.number
}

Like.defaultProps = {
  rating: 0
}

export default Like
