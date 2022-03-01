import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props){
    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');
    function handleChangeName(e){
        setName(e.target.value);
    }
    function handleChangeLink(e){
        setLink(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        props.onAddPlace({
            name,
            link,
        });
    }
    return(
        <PopupWithForm title="Новое место" name="place" isOpen={props.isOpen} onClose={props.onClose} buttonText="Создать"
                       onSubmit={handleSubmit} isLoading={props.isLoading} handleOverlayClose={props.handleOverlayClose}
                       buttonText="Создать">
            <input className="popup__input popup-photos__input-card-name" id="card-name-input" type="text"
                   placeholder="Название" name="name" minLength="2" maxLength="30" required
                   onChange={handleChangeName}/>
            <span className="popup__input-error placeName-input-error" id="card-name-input-error"></span>
            <input className="popup__input popup-photos__input popup-photos__input_type_card-src"
                   id="card-src-input" type="url"
                   placeholder="Ссылка на картинку" name="link" required onChange={handleChangeLink}/>
            <span className="popup__input-error placeUrl-input-error" id="card-src-input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;