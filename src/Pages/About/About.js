import React from 'react';
import Container from 'react-bootstrap/Container';

export const About = () => {
    return (
        <Container fluid={true} className='mt-4'>
            <h2 className='text-center'>Hi, I'm <span className='text-primary'>Jon</span></h2>
            <br />
            <p className='mb-5 mx-auto w-xl-50'>Hello, I'm Jon McCutchen, a software engineer helping to advance technology one line of code at a time.</p>

            <h3>My <span className='text-primary'>Journey</span></h3>
            <p>I embarked on my tech journey while pursuing a degree in Mechanical Engineering in London. Here, I found myself captivated by the rapidly evolving field of technology and resolved to delve deeper. I independently learned a suite of software development languages, including HTML, CSS, JavaScript, React.js, and Python, with the assistance of Codecademy.
                My experience abroad unveiled the incredible global potential of software development, its modern appeal, its versatility that allows anyone to contribute to a project from any corner of the world. This appealed to my love for travel and learning about different cultures, leading me to pivot towards a career in software engineering.</p>
            <h3>My <span className='text-primary'>Experience</span></h3>    
                <p>Now based in Atlanta, I'm an Associate Software Developer at Delta Airlines. My role involves collaboration with diverse teams, developing and maintaining revenue and accounting applications. I utilize my expertise in Java, Python, JavaScript, and other various frameworks, along with my experience with AWS, to modernize legacy systems and enhance their performance. 
                    I previously honed my software skills at Genspark and offered my web development expertise as a freelancer to several small businesses. My immediate goal is to grow within an innovative and forward-thinking organization, where I can add value and simultaneously refine my skills and experience.</p>
            <h3>Let's <span className='text-primary'>Connect</span></h3>
                <p>If you'd like to get in touch, please feel free to contact me via email at <a href="mailto:jmmccutchen1@gmail.com">jmmccutchen1@gmail.com</a> or via LinkedIn at <a href="https://www.linkedin.com/in/jonmccutchen">https://www.linkedin.com/in/jonmccutchen</a>. I look forward to connecting with you!</p>
        </Container>
    )
}
