function ImagePopup(props) {
  return (
    <section
      className={`popup popup_func_preview ${
        props.card.name ? "popup_opened" : ""
      }`}
      onClick={props.onOverlayClose}
      onKeyDown={props.onEscClose}
    >
      <figure className="popup__image-container">
        <button
          onClick={props.onClose}
          id="closeButtonPreview"
          className="popup__close-button"
          type="button"
          aria-label="закрыть"
        ></button>
        <img
          className="popup__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <figcaption className="popup__caption">{props.card.name}</figcaption>
      </figure>
    </section>
  );
}
export default ImagePopup;
