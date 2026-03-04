import React from 'react';
import { ButtonContainer } from './style.js';

const Button = ({ children, onClick, type, title, customProps, disabled=false }) => {
  return (
    <ButtonContainer onClick={onClick} type={type} customProps={customProps}
      disabled={disabled}
    >
      {title || children}
    </ButtonContainer>
  );
};

export default Button;

