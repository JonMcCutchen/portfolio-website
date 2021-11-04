import React from 'react';
import Container from 'react-bootstrap/Container';

export const Footer = () => {
    return(
        <footer className='mt-5 border-top'>
            <Container fluid={true}>
                <p>Site made by Jon McCutchen with React.js</p>
            </Container>
        </footer>
    )
}