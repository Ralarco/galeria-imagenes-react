import React from 'react'
import Navbar from 'react-bootstrap/Navbar';

const Header = (props) => {
    return(
        <Navbar bg="dark mb-5 p-2" variant="dark">
        
          <Navbar.Brand href="#home">
            <img src={ props.img } alt="logo React" className='logoNav'/>
            { props.title }
          </Navbar.Brand>
        
      </Navbar>
    )
}

export default Header;