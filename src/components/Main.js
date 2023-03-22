import { useContext, useEffect, useState } from "react";
import Card from "./Card.js";
import { currentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = useContext(currentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__image">
            <img
              className="profile__avatar"
              src={currentUser.avatar}
              alt="аватар пользователя"
            />
            <button
              className="profile__change-button"
              type="button"
              aria-label="Изменить аватар пользователя"
              onClick={props.onEditAvatar}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__text">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="изменить"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__caption">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          aria-label="добавить"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="elements">
        {props.cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
            onCardLike={props.onCardLike}
            onCardDelete={props.onCardDelete}
          ></Card>
        ))}
      </section>
    </main>
  );
}
export default Main;
