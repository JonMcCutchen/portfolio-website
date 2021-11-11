import React from 'react';
import { CardInfo } from './CardInfo';

export const Card = (props) => {
    return (
        <div className='j-card' onClick={() => props.onClick(props.item)}>
            <img className='j-card-image' src={props.item.imgSrc} alt={props.item.imgSrc} />
            {props.item.selected  && <CardInfo title={props.item.title} subTitle={props.item.subTitle} link={props.item.link}/>}
        </div>
    ) 
}