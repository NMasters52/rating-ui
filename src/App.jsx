import { useState } from "react";

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const stars = Array.from({length: 5}, (_, i) => i + 1);

  const ratingClick = (star) => {
    setRating(star);
  }

  const starActive = (star) => star <= rating ? 'active' : '';


  return (
    <>
     <div className="rating-container">
      <div className="stars">
        {stars.map((star, index) => (
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
     <h2>Rate your experience</h2>
     </div>
    </>
  )
}

export default App
