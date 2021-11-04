import React from 'react';
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const linkedIn = <FontAwesomeIcon icon={faLinkedin} size='lg'/>
const github = <FontAwesomeIcon icon={faGithub} size='lg'/>
const instagram = <FontAwesomeIcon icon={faInstagram} size='lg' />
const facebook = <FontAwesomeIcon icon={faFacebook} size='lg' />
const twitter = <FontAwesomeIcon icon={faTwitter} size='lg' />


export const Contact = () => {
    return(
        <Container className='text-center contact-container'>
            <p className='my-5'>Contact me via email at: <a className='text-decoration-none' href='mailto:jmmccutchen1@gmail.com'>jmmccutchen1@gmail.com</a></p>
            <h5 className='pt-5 mb-5'>Socials</h5>
            <a href='https://www.linkedin.com/in/jonmccutchen/' target='_blank' rel='noreferrer'>{linkedIn}</a>
            <a href='https://github.com/JonMcCutchen' target='_blank' rel='noreferrer'>{github}</a>
            <a href='https://www.instagram.com/jon_mccutchen/' target='_blank' rel='noreferrer'>{instagram}</a>
            <a href='https://www.facebook.com/profile.php?id=100010600638652' target='_blank' rel='noreferrer'>{facebook}</a>
            <a href='https://twitter.com/Jon_McCutchen' target='_blank' rel='noreferrer'>{twitter}</a>
        </Container>
    )
}