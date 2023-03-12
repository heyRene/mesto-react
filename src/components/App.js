import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

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
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  return (
    <>
      <div className="page">
        <div className="container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            name="avatar"
            title="Обновить аватар"
            onClose={closeAllPopups}
          >
            <fieldset className="popup__fieldset popup__fieldset_type_avatar">
              <input
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

          <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            name="edit"
            title="Редактировать профиль"
            onClose={closeAllPopups}
          >
            <fieldset className="popup__fieldset">
              <input
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
                type="text"
                className="popup__input"
                name="occupation"
                id="occupation-input"
                placeholder="О себе"
                minLength="2"
                maxLength="200"
                required
              />
              <span
                className="popup__input-error"
                id="occupation-input-error"
              ></span>
            </fieldset>
          </PopupWithForm>

          <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            name="add"
            title="Новое место"
            onClose={closeAllPopups}
          >
            <fieldset className="popup__fieldset">
              <input
                type="text"
                className="popup__input"
                name="name"
                id="place-input"
                placeholder="Название"
                minLength="2"
                maxLength="30"
                required
              />
              <span
                className="popup__input-error"
                id="place-input-error"
              ></span>
              <input
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
          <PopupWithForm
            onClose={closeAllPopups}
            name="confirm"
            title="Вы уверены?"
            buttonName="Да"
          ></PopupWithForm>
          <ImagePopup onClose={closeAllPopups} card={selectedCard}></ImagePopup>
        </div>
      </div>
    </>
  );
}

export default App;
