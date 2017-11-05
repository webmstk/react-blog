import React from 'react'
import PropTypes from 'prop-types'

import TextBox from '../ui/TextBox'
import Like from './Like'
import Meta from './Meta'

import { Segment, Divider, Label, Image } from 'semantic-ui-react'

const BlogItem = ({ title, text, image, meta, like }) => (
  <div>
    <h3>{title}</h3>

    <Segment>
      <Label ribbon>Автор: {meta.author}</Label>
      <Image {...image} centered />
      <TextBox>{text}</TextBox>
      <Meta {...meta} />
    </Segment>

    <Like rating={meta.rating} like={like} floated='right' />

    <Divider hidden section clearing />
  </div>
)

BlogItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.object,
  meta: PropTypes.shape({
    author: PropTypes.string.isRequired,
    rating: PropTypes.number,
    ...Meta.propTypes
  }),
  like: PropTypes.func.isRequired
}

export default BlogItem
