import React from 'react';
import Container from 'react-bootstrap/Container';

export const About = () => {
    return(
        <Container fluid={true} className='mt-4'>
            <h2 className='text-center'>Hi, I'm <span className='text-primary'>Jon</span></h2>
            <br />
            <p className='mb-5 mx-auto w-xl-50'>I'm a small town kid from South Carolina that has always been intrigued by emerging tech. I got a degree in mechanical engineering while spending 3 years in London, England. During that time, I taught myself html, css, javascript and react.js with a little help from Codecademy. Afterwards I decided that I preferred working with computers and the web. I like the modernity of the field and being able to contribute to a project from anywhere in the world. I have a passion for traveling and absorbing new places and cultures so working remotely or semi-remotely is definitely a plus for me. I'd love to start my own company one day, something that has a positive impact on the planet and the people living on it. For now I want to work for an inspiring company and bring as much value as I can while building my skills and experience.</p>
        </Container>
    )
}