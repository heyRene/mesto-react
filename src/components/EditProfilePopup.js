import { useContext, useState, useEffect } from "react";
import { currentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  const currentUser = useContext(currentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onOverlayClose={props.onOverlayClose}
      buttonName={props.isLoading ? "Сохранение..." : "Сохранить"}
      name="edit"
      title="Редактировать профиль"
    >
      <fieldset className="popup__fieldset">
        <input
          onChange={handleChangeName}
          value={name || ''}
          type="text"
          className="popup__input"
          name="name"
          id="name-input"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input-error" id="name-input-error"></span>
        <input
          onChange={handleChangeDescription}
          value={description || ''}
          type="text"
          className="popup__input"
          name="occupation"
          id="occupation-input"
          placeholder="О себе"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input-error" id="occupation-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditProfilePopup;
