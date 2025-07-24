import { useState } from "react";
import { Star } from "./Star";
import { Modal } from "./Modal";
import { Button } from "./Button";

export const Rating = ({
    feedBackMessages
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [modal, setModal] = useState(false);

  

  const stars = Array.from({length: 5}, (_, i) => i + 1);

  const ratingClick = (star) => {
    setRating(star);
  }

  const closeModal = () => {
    setModal(false)
    setHover(0)
    setRating(0)
  }


  return (
    <>
     <div className="rating-container">
      <h2>Rate your experience</h2>
      <div className="stars">
        {stars.map((star) => (
           <Star
            key={star}
            star={star}
            rating={rating}
            hover={hover}
            ratingClick={ratingClick}
            hoverEnter={setHover}
            hoverLeave={() => setHover(null)}
           />)
          )}
      </div>
          {rating > 0 ? <p className="feedback">{feedBackMessages[rating -1]}</p> : ''}

      <Button
        className="submit-btn"
        disabled={rating === 0}
        onClick={setModal}
      >
        Submit
      </Button>

        <Modal 
            rating={rating}
            closeModal={closeModal}
            isOpen={modal}
        />

     </div>
    </>
  )
}
