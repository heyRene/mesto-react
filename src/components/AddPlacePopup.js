import PopupWithForm from "./PopupWithForm";
import { useEffect, useState } from "react";

function AddPlacePopup(props) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  function handleAddName(e) {
    setName(e.target.value);
  }
  function handleAddDescription(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({ name, link });
  }

  useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onOverlayClose={props.onOverlayClose}
      buttonName={props.isLoading ? "Сохранение..." : "Сохранить"}
      name="add"
      title="Новое место"
    >
      <fieldset className="popup__fieldset">
        <input
          value={name}
          onChange={handleAddName}
          type="text"
          className="popup__input"
          name="name"
          id="place-input"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__input-error" id="place-input-error"></span>
        <input
          value={link}
          onChange={handleAddDescription}
          type="url"
          className="popup__input"
          name="link"
          id="link-input"
          placeholder="Ссылка на картинку"
          required
        />
        <span className="popup__input-error" id="link-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
