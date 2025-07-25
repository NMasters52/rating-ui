import { Button } from "./Button";

export const Modal = ({
        rating,
        closeModal,
        isOpen
    }) => {
    if (!isOpen) return null;

  return (
    <div className="modal-overlay">
        <div className="modal">
        <h2>Thank you</h2>
        <p>
            You rated us {rating} star{rating > 1 ? 's' : ''}
        </p>
        <Button
            className="close-btn"
            onClick={closeModal}
        >
            Close
        </Button>
        </div>
    </div>
  )
}
