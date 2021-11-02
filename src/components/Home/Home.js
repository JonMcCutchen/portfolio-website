import React from 'react';
import './Home.css';
import img from '../../assets/images/IMG_2885 (2).jpeg';

export const Home = () => {
    return(
        <div>
            <div className='home-banner'>
                <h2>Hi, I'm <span>Jon</span> and I'm a <span>web developer</span></h2>
                <p>Welcome to my website! Here you can find out more about me and view  a collection of my projects.</p>
                <div >
                    
                </div>
                <img src={img} alt=''></img>
            </div>
        </div>
    )
}