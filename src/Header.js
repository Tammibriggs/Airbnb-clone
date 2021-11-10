import { Search, Language, ExpandMore } from '@mui/icons-material'
import './header.css'
import { Avatar } from '@mui/material'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='header'>
      <Link to='/'>
        <img
            className="header__icon"
            src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
            alt=""
        />
      </Link>
      
      <div className='header__center'>
          <input type="text" />
          <Search />
      </div>

      <div className='header__right'>
          <p>Become a host</p>
          <Language />
          <ExpandMore />
          <Avatar />
      </div>
  </div>
  )
}

export default Header
