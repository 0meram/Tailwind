import React from 'react'
import { ReactComponent as Avatar } from '../icons/avatar.svg'
import { ReactComponent as Info } from '../icons/info.svg'
import { ReactComponent as Bell } from '../icons/bell.svg'
import { ReactComponent as Search } from '../icons/search.svg'
import '../style/header.css'

const Header = () => {
  return (
    <header className="header flex items-center justify-between text-black px-40 border-b border-gray-300 h-140">
      <div className="flex items-center">
        <Search />
        <span>Search...</span>
      </div>
      <div className="header_icons">
        <div>
          <Bell />
        </div>
        <div>
          <Info />
        </div>
        <div>
          <Avatar />
        </div>
      </div>
    </header>
  )
}

export default Header
