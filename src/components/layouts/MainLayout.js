import React from 'react'
import PropTypes from 'prop-types'

import { Container, Menu, Divider } from 'semantic-ui-react'

const MainLayout = ({ children }) => {
  return (
    <div>
      <Menu fixed='top'>
        <Container>
          <Menu.Item header>Блог</Menu.Item>
          <Menu.Item onClick={() => { console.log('not implemented') }}>О проекте</Menu.Item>
          <Search />
        </Container>
      </Menu>

      <Divider hidden section />
      <Divider hidden section />

      <Container>
        {children}
      </Container>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout

const Search = () => {
  return (
    <Menu.Menu position='right'>
      <div className='ui right aligned category search item'>
        <div className='ui transparent icon input'>
          <input className='prompt' type='text' placeholder='Поиск постов...' />
          <i className='search link icon' />
        </div>
        <div className='results' />
      </div>
    </Menu.Menu>
  )
}
