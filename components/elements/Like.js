import React, { createElement } from 'react'
import LikeTypes from '../prop_types'

import Button from '../ui/Button'

const Like = ({ rating, like }) => (
  createElement('div', null,
    createElement('span', null, rating),
    createElement(Button, { onClick: like }, 'Like')
  )
)

Like.propTypes = LikeTypes

Like.defaultProps = {
  rating: 0
}

export default Like
