function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
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
            className="element__like"
            type="button"
            aria-label="нравится"
          ></button>
          <p className="element__sum-like">{props.card.likes.length}</p>
        </div>
        <button
          className="element__delete"
          type="button"
          aria-label="удалить"
        ></button>
      </div>
    </section>
  );
}
export default Card;
