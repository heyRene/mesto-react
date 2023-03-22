import { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarRef.current.value);
  }

  useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onOverlayClose={props.onOverlayClose}
      buttonName={props.isLoading ? "Сохранение..." : "Сохранить"}
      name="avatar"
      title="Обновить аватар"
    >
      <fieldset className="popup__fieldset popup__fieldset_type_avatar">
        <input
          ref={avatarRef}
          type="url"
          className="popup__input"
          name="link"
          id="avatar-link-input"
          placeholder="Ссылка на картинку"
          required
        />
        <span
          className="popup__input-error"
          id="avatar-link-input-error"
        ></span>
      </fieldset>
    </PopupWithForm>
  );
}
export default EditAvatarPopup;
