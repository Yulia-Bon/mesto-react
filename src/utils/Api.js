export class Api {
    constructor(options) {
        this._headers = options.headers;
        this._baseUrl = options.baseUrl;
        this._handleReturnPromise = ((res) => {
            if(res.ok){
                return res.json();
            }
            return Promise.reject(`An error has occurred: ${res.status} :(`);
        });
    }

    //Cards
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            headers: this._headers,
        }).then((res) => this._handleReturnPromise(res));
    }

    setNewCard(data) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                link: data.link,
            }),
        }).then((res) => this._handleReturnPromise(res));
    }

    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => this._handleReturnPromise(res));
    }

    //likes
    setLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: "PUT",
            headers: this._headers,
        }).then((res) => this._handleReturnPromise(res));
    }
    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: "DELETE",
            headers: this._headers,
        }).then((res) => this._handleReturnPromise(res));
    }

    //Profile
    getProfileInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: this._headers,
        }).then((res) => this._handleReturnPromise(res));
    }

    setProfileInfo(data) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                name: data.name,
                about: data.about,
            }),
        }).then((res) => this._handleReturnPromise(res));
    }

    //Avatar
    changeAvatar(data) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.avatar,
            }),
        }).then((res) => this._handleReturnPromise(res));
    }
}

const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-34',
    headers: {
        authorization: 'df21cdb1-cdd7-4792-acbf-9af5bc5a6190',
        'Content-Type': 'application/json'
    }
});

export default api;