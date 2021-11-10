import { Search, Language, ExpandMore } from '@mui/icons-material'
import './header.css'
import { Avatar } from '@mui/material'

function Header() {
  return (
    <div className='header'>
      <img 
        src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
        alt='airbnb'
        className='header__icon'
      />
      <div className='header__center'>
        <input 
          type='text'
        />
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
