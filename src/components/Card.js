import { useContext } from "react";
import { currentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUser = useContext(currentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__delete ${
    isOwn ? "element__delete_active" : ""
  }`;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked && "element__like_active"
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  }

  return (
    <section className="element">
      <img
        className="element__image"
        onClick={handleClick}
        src={props.card.link}
        alt={props.card.name}
      />
      <div className="element__caption">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__like-container">
          <button
            onClick={handleLikeClick}
            className={cardLikeButtonClassName}
            type="button"
            aria-label="нравится"
          ></button>
          <p className="element__sum-like">{props.card.likes.length}</p>
        </div>
        {isOwn && (
          <button
            className={cardDeleteButtonClassName}
            onClick={handleDeleteClick}
            type="button"
            aria-label="удалить"
          />
        )}
      </div>
    </section>
  );
}
export default Card;
