function PopupWithForm(props) {
  return (
    <section
      className={`popup popup_func_${props.name} ${
        props.isOpen ? "popup_opened" : false
      }`}
    >
      <div className={`popup__container popup__container_type${props.name}`}>
        <h3 className="popup__title">{props.title}</h3>
        <form className="popup__form" noValidate>
          {props.children}
          <button
            className={`popup__submit-button popup__submit-button_func_${props.name}`}
            type="submit"
          >
            {props.buttonName || "Сохранить"}
          </button>
        </form>
        <button
          className="popup__close-button"
          type="button"
          aria-label="закрыть"
          onClick={props.onClose}
        ></button>
      </div>
    </section>
  );
}
export default PopupWithForm;
