import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [modal, setModal] = useState(false);

  const feedBackMessages = ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'];

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
           <span 
            className='star'
            key={star}
            onClick={() => ratingClick(star)}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
            style={{color: star <= (hover || rating) ? '#FFD700' : '#ccc' }}
          >
            &#9733;
          </span>)
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

export default App
