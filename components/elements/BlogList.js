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
      map(posts, (post, key) => (
        createElement(BlogItem, assign({}, {
          key,
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
