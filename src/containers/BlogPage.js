import React, { Component } from 'react'
import moment from 'moment'
import { bind, map, each } from 'lodash'

import { IMAGE_WIDTH, IMAGE_HEIGHT } from 'constants/blog'
import posts from 'data/posts'
import { formatDateTime } from 'helpers/blog'

import '../../node_modules/c3/c3.min.css'
import { Grid, Sticky, Menu, Divider } from 'semantic-ui-react'

import MainLayout from 'components/layouts/MainLayout'
import BlogList from 'components/elements/BlogList'
import DonutChart from 'components/elements/charts/DonutChart'

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
    super(props)

    formatDateTimes(posts)
    setDefaultImageSizes(posts)

    this.state = { posts }
    this.like = bind(this.like, this)
  }

  like (postId) {
    const posts = map(this.state.posts, post => {
      if (post.id === postId) {
        const { rating } = post.meta
        post.meta.rating = rating ? rating + 1 : 1
      }

      return post
    })

    this.setState({ posts })
  }

  truncate (str, limit, end = '...') {
    if (str.length > limit) {
      return str.slice(0, limit) + end
    }

    return str
  }

  render () {
    const { posts } = this.state
    const columns = posts.map(el => [this.truncate(el.title, 25), el.meta.rating])

    return (
      <MainLayout>
        <Grid stackable>
          <Grid.Column width={11}>
            <BlogList posts={posts} like={this.like} />
            <Pagination />
          </Grid.Column>
          <Grid.Column width={5}>
            <Sticky offset={50}>
              <DonutChart columns={columns} />
            </Sticky>
          </Grid.Column>
        </Grid>
        <Divider hidden section />
        <Divider hidden section />
      </MainLayout>
    )
  }
}

export default BlogPage

const Pagination = () => (
  <Menu pagination>
    <Menu.Item name='1' active onClick={() => { console.log('not implemented') }} />
    <Menu.Item disabled>...</Menu.Item>
    <Menu.Item name='10' onClick={() => { console.log('not implemented') }} />
    <Menu.Item name='11' onClick={() => { console.log('not implemented') }} />
    <Menu.Item name='12' onClick={() => { console.log('not implemented') }} />
  </Menu>
)
