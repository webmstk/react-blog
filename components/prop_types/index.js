import PropTypes from 'prop-types'

export const MetaTypes = {
  author: PropTypes.string,
  rating: PropTypes.number,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
}

export const BlogItemTypes = {
  text: PropTypes.string.isRequired,
  like: PropTypes.func.isRequired,
  image: PropTypes.object,
  meta: PropTypes.shape(MetaTypes)
}

export const BlogListTypes = {
  posts: PropTypes.array.isRequired,
  like: PropTypes.func.isRequired
}

 export const LikeTypes = {
  like: PropTypes.func.isRequired,
  rating: PropTypes.number
 }
