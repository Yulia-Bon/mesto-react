function ImagePopup(props){
    return(
        <div className= {props.card.link !== '' ? "popup popup_opened popup_type_image" : "popup popup_type_image"} id='popup_type_image'>
            <div className="popup__container-fullscreen">
                <button className="popup__close popup-fullscreen__close-button" type="button" aria-label="закрыть форму" id="button_close_image" onClick={props.onClose}></button>
                <figure className="popup__figure">
                    <img src={props.card.link} alt={props.card.name} className="popup__image popup-fullscreen__image" />
                    <figcaption className="popup__figcaption popup-fullscreen__figcaption">{props.card.name}</figcaption>
                </figure>
            </div>
        </div>
    )
}
export default ImagePopup;