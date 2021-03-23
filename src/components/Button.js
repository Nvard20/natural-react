import React from 'react';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

//arrow function button
// const Botton = ({props1,props2,props3,props4}) => {...}

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  id
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
  
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
        id = {id}
      >
        {children}
      </button>
    
  );
};