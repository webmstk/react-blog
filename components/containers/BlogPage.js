import React, { Component, createElement } from 'react'
import moment from 'moment'
import { bind, map, each } from 'lodash'

import { IMAGE_WIDTH, IMAGE_HEIGHT } from '../constants/blog'
import posts from '../data/posts'
import { formatDateTime } from '../helpers/blog'

import BlogList from '../elements/BlogList'

const formatDateTimes = posts => {
  each(posts, post => {
    const { createdAt, updatedAt } = post.meta

    if (createdAt) {
      post.meta.createdAt = formatDateTime(moment(createdAt))
    }

    if (updatedAt) {
      post.meta.updatedAt = formatDateTime(moment(updatedAt))
    }
  })
}

const setDefaultImageSizes = posts => {
  each(posts, post => {
    if (post.image) {
      post.image.width = IMAGE_WIDTH
      post.image.height = IMAGE_HEIGHT
    }
  })
}

class BlogPage extends Component {
  constructor (props) {
    super (props)

    formatDateTimes(posts)
    setDefaultImageSizes(posts)

    this.state = { posts }
    this.like = bind(this.like, this)
  }

  like (post_id) {
    const posts = map(this.state.posts, post => {
      if (post.id == post_id) {
        const { rating } = post.meta
        post.meta.rating = rating ? rating + 1 : 1
      }

      return post
    })

    this.setState({ posts })
  }

  render () {
    const { posts } = this.state
    return createElement(BlogList, { posts, like: this.like })
  }
}

export default BlogPage
