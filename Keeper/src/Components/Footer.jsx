
import React from 'react'


 const Footer = () => {
    const currentYear=new Date().getFullYear();
  return (
    <footer>
        <p>COPYRIGHT © {currentYear}</p>
    </footer>
    
  )
}
export default Footer;