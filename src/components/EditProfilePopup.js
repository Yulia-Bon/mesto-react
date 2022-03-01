import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props){
    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleChangeName(e){
        setName(e.target.value);
    }
    function handleChangeDescription(e){
        setDescription(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        props.onUpdateUser({
            name,
            about: description,
        });
    }
    return(
        <PopupWithForm title="Редактировать профиль"
                       name="profile"
                       onClose={props.onClose}
                       isOpen={props.isOpen}
                       buttonText="Сохранить"
                       onSubmit={handleSubmit}
                       isLoading={props.isLoading}
                       handleOverlayClose={props.handleOverlayClose}>
            <input className="popup__input popup-user__input-name"
                   id="user-name-input"
                   name="name"
                   type="text"
                   value={name}
                   placeholder="Имя"
                   minLength="2"
                   maxLength="40"
                   required
                   onChange={handleChangeName}/>
            <span className="popup__input-error userName-input-error" id="user-name-input-error"></span>
            <input className=" popup__input  popup-user__input popup-user__input_type_job"
                   id="user-description-input"
                   type="text"
                   value={description}
                   placeholder="Описание"
                   name="about"
                   minLength="2"
                   maxLength="200"
                   required
                   onChange={handleChangeDescription}/>
            <span className="popup__input-error userAbout-input-error" id="user-description-input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;