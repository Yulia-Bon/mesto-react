import React from 'react';
import Card from './Card';
import api from '../utils/Api'

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [profileAvatar, setprofileAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getProfileInfo()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setprofileAvatar(res.avatar);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    React.useEffect(() => {
        api.getInitialCards()
            .then((res) => {
                setCards(res);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <main>
            <section className="profile">
                <div className="profile__edit-avatar" onClick={props.onEditAvatar}></div>
                <img className="profile__avatar" src={profileAvatar} alt="Аватар"/>
                <div className="profile__info">
                    <h1 className="profile__name">{userName}</h1>
                    <p className="profile__job">{userDescription}</p>
                    <button className="profile__edit" type="button" aria-label="кнопка изменения профиля"
                            onClick={props.onEditProfile}></button>
                </div>
                <button className="profile__add-button" type="button" aria-label="добавить фото"
                        onClick={props.onAddPlace}></button>
            </section>

            <section className="places">
                <ul className="photo-grid">
                    {cards.map((card) => {
                        return (
                            <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
                        )
                    })}
                </ul>
            </section>
        </main>
    );
}

export default Main;