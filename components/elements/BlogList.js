import React, { createElement } from 'react'
import BlogListTypes from '../prop_types'
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

BlogList.propTypes = BlogListTypes

export default BlogList
