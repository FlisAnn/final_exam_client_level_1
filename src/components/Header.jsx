import React from 'react'
import { Image, Menu } from 'semantic-ui-react'

const Header = () => {
  return (
    <Menu inverted>
      <Menu.Item>
        <Image
          src='https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg'
          size='small'
        />
      </Menu.Item>
    </Menu>
  )
}

export default Header
