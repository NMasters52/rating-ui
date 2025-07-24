import { useState } from "react";
import { Star } from "./Star";

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

      <button
        className="submit-btn"
        disabled={rating === 0}
        onClick={() => setModal(true)}
      >
        Submit
      </button>

      {modal && 
        <div className="modal-overlay">
          <div className="modal">
            <h2>Thank you</h2>
            <p>
              You rated us {rating} star{rating > 1 ? 's' : ''}
            </p>
            <button
              className="close-btn"
              onClick={() => setModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      }
     </div>
    </>
  )
}
