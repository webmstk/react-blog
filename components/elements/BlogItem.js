import React, { createElement } from 'react'
import BlogItemTypes from '../prop_types'

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

BlogItem.propTypes = BlogItemTypes

export default BlogItem
