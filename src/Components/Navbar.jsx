import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

const Navbar = () => {
  const {dispatch, theme} = useContextGlobal()
  return (
    <nav className='nav' id={theme.theme}>
      <div className='links-navbar'>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/favs'>Favs</Link>
      </div>
      <input id="dark-mode" class="toggle" type="checkbox" name="Dark mode"   role="switch" value="on" onClick={() => dispatch({type: "theme"})}/>
      <label for="dark-mode" class="sr">
      </label>

    </nav>
  )
}

export default Navbar