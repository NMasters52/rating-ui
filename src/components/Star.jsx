import React from 'react'

export const Star = ({
    star,
    rating,
    hover,
    ratingClick,
    hoverEnter,
    hoverLeave
}) => {
  return (
    <span 
        className='star'
        onClick={() => ratingClick(star)}
        onMouseEnter={() => hoverEnter(star)}
        onMouseLeave={hoverLeave}
        style={{color: star <= (hover || rating) ? '#FFD700' : '#ccc' }}
    >
        &#9733;
    </span>
  )
}
