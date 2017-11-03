import React, { createElement } from 'react'
import PropTypes from 'prop-types'

import { formatDateTime } from '../helpers/blog'

import Image from '../ui/Image'
import TextBox from '../ui/TextBox'
import Like from './Like'
import Meta from './Meta'

const BlogItem = ({ text, image, meta, like }) => (
  createElement('div', null,
    createElement(Image, image),
    createElement(TextBox, null, text),
    createElement(Like, { rating: meta.rating, like }),
    createElement(Meta, meta)
  )
)

BlogItem.propTypes = {
  text: PropTypes.string.isRequired,
  like: PropTypes.func.isRequired,
  image: PropTypes.object,
  meta: PropTypes.shape(Meta.propTypes)
}

export default BlogItem
