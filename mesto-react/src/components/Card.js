import React from 'react';

function Card(props){
    function handleClick() {
        props.onCardClick(props.card);
    }
    return(
        <article className="photos-element">
            <button className="photo-grid__delete-button" type="button" aria-label="удалить фото"></button>
            <img className="photo-grid__pic" src={props.card.link} alt={props.card.name} />
            <div className="element__container">
                <h2 className="photo-grid__title">{props.card.name}</h2>
                <div className="photo-grid__like-container">
                    <button className="photo-grid__like" type="button" aria-label="лайк"></button>
                     <p className="photo-grid__like-numbers">{props.card.likes.length}</p>
                </div>
            </div>
        </article>
    )
}
export default Card;