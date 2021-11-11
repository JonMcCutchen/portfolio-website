import React from 'react';
import { Card } from './Card';
import proHealth from '../../assets/images/pro-health-webpage.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Pro Health and Nutrition',
                    subTitle: 'A website built for an independent health and nutrition business.',
                    imgSrc: proHealth,
                    link: 'https://www.prohealthandnutrition.co.uk/',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id) => {
        let items = [...this.state.items]
        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        })

        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} onClick={() => this.handleCardClick(item.id)} key={item.id}/>
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <h2 className='carousel-h2'>Projects</h2>
                <Row className='justify-content-around'>
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;

