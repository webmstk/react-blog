import React from 'react'
import PropTypes from 'prop-types'

import { Button } from 'semantic-ui-react'

const Like = ({ rating, like, ...props }) => (
  <Button
    content='Круть'
    icon='heart'
    label={{ as: 'a', basic: true, pointing: 'right', content: rating }}
    labelPosition='left'
    onClick={like}
    {...props}
  />
)

Like.propTypes = {
  like: PropTypes.func.isRequired,
  rating: PropTypes.number
}

Like.defaultProps = {
  rating: 0
}

export default Like
