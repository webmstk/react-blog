import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'lodash'

import BlogItem from './BlogItem'

const BlogList = ({ posts, like }) => {
  if (posts.length === 0) {
    return (
      <div>Блог пуст</div>
    )
  }

  return (
    <div>
      {
        map(posts, post => (
          <BlogItem
            {...post}
            like={() => like(post.id)}
            key={post.id}
          />
        ))
      }
    </div>
  )
}

BlogList.propTypes = {
  posts: PropTypes.array.isRequired,
  like: PropTypes.func.isRequired
}

export default BlogList
