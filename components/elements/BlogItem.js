import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import { formatDateTime } from '../helpers/blog'

import Image from '../ui/Image'
import TextBox from '../ui/TextBox'
import Like from './Like'

const BlogItem = ({ text, image, meta, like }) => (
  createElement('div', null,
    createElement(Image, image),
    createElement(TextBox, null, text),
    createElement(Like, { rating: meta.rating, like }),
    createElement('div', null,
      createElement('div', null, `Автор: ${meta.author}`),
      createElement('div', null, `Создано: ${meta.createdAt}`),
      createElement('div', null, `Обновлено: ${meta.updatedAt}`)
    )
  )
)

BlogItem.propTypes = {
  text: PropTypes.string.isRequired,
  like: PropTypes.func.isRequired,
  image: PropTypes.object,
  meta: PropTypes.shape({
    author: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string
  })
}

export default BlogItem
