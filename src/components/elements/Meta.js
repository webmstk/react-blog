import React from 'react'
import PropTypes from 'prop-types'

import { Segment } from 'semantic-ui-react'

const Meta = ({ createdAt, updatedAt }) => (
  <Segment basic size='mini' textAlign='right'>
    <div>{createdAt}</div>
    {
      updatedAt && updatedAt !== createdAt &&
      <div>обн. {updatedAt}</div>
    }
  </Segment>
)

Meta.propTypes = {
  createdAt: PropTypes.string.isRequired,
  updatedAt: PropTypes.string
}

export default Meta
