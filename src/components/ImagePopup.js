function ImagePopup(props) {
    function handleOverlayClick(e) {
        if (e.target === e.currentTarget) {
            props.handleOverlayClose(e); // вызываем переданную функцию, если клик по фону
        }
    }

    return (
        <div className={`popup popup_type_image ${props.card.link && "popup_opened"}`}
             id='popup_type_image'
             onClick={handleOverlayClick} // добавляем обработчик клика на фон
        >
            <div className="popup__container-fullscreen">
                <button className="popup__close popup-fullscreen__close-button" type="button" aria-label="close form"
                        id="button_close_image" onClick={props.onClose}></button>
                <figure className="popup__figure">
                    <img src={props.card.link} alt={props.card.name} className="popup__image popup-fullscreen__image"/>
                    <figcaption className="popup__figcaption popup-fullscreen__figcaption">
                        {props.card.name}
                    </figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ImagePopup;