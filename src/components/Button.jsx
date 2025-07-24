import React from 'react'

export const Button = ({
    children,
    onClick,
    className,
    disabled
}) => {
  return (
    <button
        className={className}
        onClick={onClick}
        disabled={disabled}
    >
        {children}
    </button>
  )
}
