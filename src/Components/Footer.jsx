import React from 'react'
import { useContextGlobal } from './utils/global.context'

const Footer = () => {
  const {theme} = useContextGlobal();
  return (
    <footer className='footer' id={theme.theme}>
        <p>Powered by</p>
        {theme.theme === "light" ? <img src="./images/DH.png" alt='DH-logo'/> : <img src="./images/DH2.png" alt='DH2-logo'/>}
    </footer>
  )
}

export default Footer
