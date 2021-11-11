import React from 'react';
import me from '../../assets/images/me.jpg';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from '../../components/Portfolio/Carousel';

export const Home = () => {
    return(
        <Container>
            <Row className='home-row'>
                <Col className=''>
                    <h2>Hi, I'm <span className='text-primary'>Jon</span> and I'm a <span className='text-primary'>web developer</span></h2>
                    <p className=''>Welcome to my website! Here you can find out more about me and view  a collection of my projects.</p>
                </Col>
                <Col className='d-flex justify-content-center' >
                <Image className='h-50'src={me} alt='' rounded />
                </Col>
            </Row>
            <Row>
                <Carousel/>
            </Row>
        </Container>

    )
}