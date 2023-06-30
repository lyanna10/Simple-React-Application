import React from 'react';


function Footer() {
    return (
        <h1 className='footerNav'>
            <nav className='navigationBarFooter'>
          <ul>
              <li><a href=''>Home</a></li>
              <li><a href=''>Blog</a></li>
              <li><a href=''>About</a></li>
              <li><a href=''>Contact</a></li>
          </ul> 
    </nav>
            <p style={{color: 'white', opacity: .5}}>&#169; 2023 Workenesh Badose</p>
        </h1>
    );
}

export default Footer