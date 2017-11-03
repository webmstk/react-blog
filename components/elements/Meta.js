import React, { createElement } from 'react'
import PropTypes from 'prop-types'

const Meta = ({ author, createdAt, updatedAt }) => (
  createElement('div', null,
    createElement('div', null, `Автор: ${author}`),
    createElement('div', null, `Создано: ${createdAt}`),
    createElement('div', null, `Обновлено: ${updatedAt}`)
  )
)

Meta.propTypes = {
  author: PropTypes.string,
  rating: PropTypes.number,
  createdAt: PropTypes.string,
  updatedAt: PropTypes.string
}

export default Meta
