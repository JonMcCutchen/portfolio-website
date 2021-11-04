import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

export const Footer = () => {
    return(
        <footer className='mt-5 border-top'>
            <Container fluid={true}>
                <Row className='justify-content-between pb-0'>
                    <Col className='p-0 d-flex justify-content-start' md={3}>
                        Site made by Jon McCutchen with React.js
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}