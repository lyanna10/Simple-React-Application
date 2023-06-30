import React from 'react'
import Header from './Header'


function Nav() {
  return (
      <nav className='navigationBar'>
          <ul>
              <Header />
              <li><a href=''>Home</a></li>
              <li><a href=''>Blog</a></li>
              <li><a href=''>About</a></li>
              <li><a href=''>Contact</a></li>
          </ul> 
    </nav>
  )
}

export default Nav