import React, { createElement } from 'react'
import MetaTypes from '../prop_types'

const Meta = ({ author, createdAt, updatedAt }) => (
  createElement('div', null,
    createElement('div', null, `Автор: ${author}`),
    createElement('div', null, `Создано: ${createdAt}`),
    createElement('div', null, `Обновлено: ${updatedAt}`)
  )
)

Meta.propTypes = MetaTypes

export default Meta
