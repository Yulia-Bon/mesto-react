import React from 'react';
import PopupWithForm from './PopupWithForm';
import {useFormWithValidation} from '../hooks/useFormWithValidation';

function EditAvatarPopup(props) {

    const {
        values,
        errors,
        isValid,
        handleChange,
        resetForm
    } = useFormWithValidation({});


    //const avatarRef = React.useRef();

    React.useEffect(() => {
        resetForm();
    }, [props.isOpen, resetForm])

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onUpdateAvatar(values);
    }

    return (
        <PopupWithForm
            title="Update Avatar"
            name="avatar"
            isOpen={props.isOpen}
            onClose={props.onClose}
            buttonText="Save"
            onSubmit={handleSubmit}
            isDisabled={!isValid}
            isLoading={props.isLoading}
            handleOverlayClose={props.handleOverlayClose}
        >
            <input
                className={errors.avatar ? "popup__input popup__input-error-line popup-avatar__input" : 'popup__input'}
                id="avatar"
                type="url"
                placeholder="Image URL"
                name="avatar"
                value={values.avatar || ''}
                required
                onChange={handleChange}
            />
            <span
                className={errors.avatar ? "popup__input-error_active popup-avatar__submit" : 'popup__input-error'}
                id="avatar-error"
            >
                {errors.avatar}
            </span>
        </PopupWithForm>
    )
    
}

export default EditAvatarPopup;