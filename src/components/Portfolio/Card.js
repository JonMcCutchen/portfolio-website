import React from 'react';
import { CardInfo } from './CardInfo';

export const Card = (props) => {



    return (
        <div className='d-flex justify-content-center flex-column j-card' onClick={() => props.click(props.item)}>
            <img className='j-card-image' src={props.item.imgSrc} alt={props.item.imgSrc} />
            {<CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
        </div>
    )
}