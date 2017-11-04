import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import { map, assign } from 'lodash'

import BlogItem from './BlogItem'

const BlogList = ({ posts, like }) => {
  if (posts.length == 0) {
    return (
      createElement('div', null, 'Блог пуст')
    )
  }

  return (
    createElement('div', null,
      map(posts, post => (
        createElement(BlogItem, assign({}, {
          key: post.id,
          like: () => like(post.id)
        }, post))
      ))
    )
  )
}

BlogList.propTypes = {
  posts: PropTypes.array.isRequired,
  like: PropTypes.func.isRequired
}

export default BlogList
