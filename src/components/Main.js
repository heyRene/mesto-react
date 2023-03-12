import React from "react";
import { api } from "../utils/Api";
import Card from "./Card.js";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userName, userDescription, userAvatar]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, [cards]);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__content">
          <div className="profile__image">
            <img
              className="profile__avatar"
              src={userAvatar}
              alt="пожилой Жак-Ив Кусто крупным планом в красной шапке на фоне океана."
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
              <h1 className="profile__title">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="изменить"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__caption">{userDescription}</p>
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
        {cards.map((card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={props.onCardClick}
          ></Card>
        ))}
      </section>
    </main>
  );
}
export default Main;
