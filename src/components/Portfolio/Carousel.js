import React, { useState } from 'react';
import { Card } from './Card';
import proHealth from '../../assets/images/pro-health-webpage.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export const Carousel = () => {
    const [items, setItems] = useState([
        {
            id: 0,
            title: 'Pro Health and Nutrition',
            subTitle: 'A website built for an independent health and nutrition business.',
            imgSrc: proHealth,
            link: 'https://www.prohealthandnutrition.co.uk/',
            selected: false
        }
    ]);

    const handleCardClick = (id, card) => {
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selected = false;
            }
        })
        setItems(items);
         
    }

    const makeItems = (items) => {
        return items.map(item => {
            console.log(item);
            return <Card item={item} click={e => handleCardClick(item.id, e)} key={item.id}/>
        })
    }

    return(
        <Container fluid={true}>
            <h2 className='carousel-h2'>Projects</h2>
            <Row className='justify-content-center'>
                {makeItems(items)}
            </Row>
        </Container>
    )
}

