import React from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext';

function Card(props) {

    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = props.card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (`photo-grid__delete-button ${isOwn ? '' : 'photo-grid__delete-button_hidden'}`);
    const isLiked = props.card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName =(`photo-grid__like ${isLiked ? 'photo-grid__like_active' : ''}`);


    function handleClick() {
        props.onCardClick(props.card);
    }

    function handleLikeClick(){
        props.onCardLike(props.card);
    }
    function handleDeleteClick(){
        props.onCardDeleteClick(props.card);
    }


    return (
        <li className="photo-grid__item">
            <img className="photo-grid__pic" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            <div className="photo-grid__item-description">
                <h2 className="photo-grid__title">{props.card.name}</h2>
                <button className={cardDeleteButtonClassName} type="button" aria-label="delete photo" onClick={handleDeleteClick}></button>
                <div>
                    <button className={cardLikeButtonClassName} type="button" aria-label="like" onClick={handleLikeClick}></button>
                    <p className="photo-grid__like-numbers">{props.card.likes.length}</p>
                </div>
            </div>
        </li>
    )
    
}

export default Card;