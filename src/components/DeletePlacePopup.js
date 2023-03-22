import PopupWithForm from "./PopupWithForm";

function DeletePlacePopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onConfirmDelete(props.card);
  }
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      onOverlayClose={props.onOverlayClose}
      buttonName={props.isLoading ? "Удаление..." : "Да"}
      name="confirm"
      title="Вы уверены?"
    ></PopupWithForm>
  );
}
export default DeletePlacePopup;
