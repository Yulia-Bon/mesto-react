import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({});

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setSelectedCard({});
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
    }

    function handleChange(evt) {
        console.log(evt.target.value);
        // временная функция обработки input
    }

    return (<div className="pages">

        <Header/>
        <Main onEditProfile={handleEditProfileClick}
              onAddPlace={handleAddPlaceClick}
              onEditAvatar={handleEditAvatarClick}
              onCardClick={handleCardClick}/>
        <Footer/>

        <PopupWithForm title="Редактировать профиль" name="profile" onClose={closeAllPopups}
                       isOpen={isEditProfilePopupOpen} buttonText="Сохранить">
            <input className="popup__input popup-user__input-name" id="user-name-input" name="name" type="text"
                   value="nik"
                   placeholder="Имя" minLength="2" maxLength="40" required onChange={handleChange}/>
            <span className="popup__input-error userName-input-error" id="user-name-input-error"></span>
            <input className=" popup__input  popup-user__input popup-user__input_type_job"
                   id="user-description-input" type="text" value="job"
                   placeholder="Описание" name="about" minLength="2" maxLength="200" required
                   onChange={handleChange}/>
            <span className="popup__input-error userAbout-input-error" id="user-description-input-error"></span>
        </PopupWithForm>

        <PopupWithForm title="Обновить аватар" name="avatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}
                       buttonText="Сохранить">
            <input className="popup__input popup-avatar__input" id="avatar" type="url"
                   placeholder="Ссылка на фото" name="avatar" required onChange={handleChange}/>
            <span className="popup__submit popup-avatar__submit" id="avatar-error"></span>
        </PopupWithForm>

        <PopupWithForm title="Новое место" name="place" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}
                       buttonText="Создать">
            <input className="popup__input popup-photos__input-card-name" id="card-name-input" type="text"
                   placeholder="Название" name="name" minLength="2" maxLength="30" required
                   onChange={handleChange}/>
            <span className="popup__input-error placeName-input-error" id="card-name-input-error"></span>
            <input className="popup__input popup-photos__input popup-photos__input_type_card-src"
                   id="card-src-input" type="url"
                   placeholder="Ссылка на картинку" name="link" required onChange={handleChange}/>
            <span className="popup__input-error placeUrl-input-error" id="card-src-input-error"></span>
        </PopupWithForm>

        <PopupWithForm title="Вы уверены?" name="check" onClose={closeAllPopups} buttonText="Да"/>
        <ImagePopup onClose={closeAllPopups} card={selectedCard}/>
    </div>);
}

export default App;
