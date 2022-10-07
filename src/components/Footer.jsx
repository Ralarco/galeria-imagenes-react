import React from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return(
      <div className='footer'>
      <Container className='p-2 mt-2'>
        <p>Galería de imágenes de perros, hecha en React</p>
        
      </Container>
      <Button variant="secondary" href='https://github.com/Ralarco/galeria-imagenes-react' target='_blank'>Ver Repositorio</Button>
      </div>
    )
}

export default Footer;