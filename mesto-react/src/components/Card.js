import React from 'react';

function Card(props){
    function handleClick() {
        props.onCardClick(props.card);
    }
    return(

            <li className="photo-grid__item">
                <img className="photo-grid__pic" src={props.card.link} alt={props.card.name} onClick={handleClick} />
                <div className="photo-grid__item-description">
                    <h2 className="photo-grid__title">{props.card.name}</h2>
                    <button className="photo-grid__delete-button" type="button" aria-label="удалить фотографию"></button>
                    <div>
                        <button className="photo-grid__like" type="button" aria-label="лайк"></button>
                        <p className="photo-grid__like-numbers">{props.card.likes.length}</p>
                    </div>
                </div>
            </li>

    )
}
export default Card;