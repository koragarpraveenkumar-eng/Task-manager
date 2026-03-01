import React from 'react';
import { ButtonContainer } from './style.js';

const Button = ({ children, onClick, type, title, customProps }) => {
  return (
    <ButtonContainer onClick={onClick} type={type} customProps={customProps}>
      {title || children}
    </ButtonContainer>
  );
};

export default Button;

