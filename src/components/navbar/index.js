import React from 'react';
import { Box, NavbarContainer, NavBarSubContainer, StyledNavLink } from './style';
import Button from '../button';

const Navbar = ({ navItems=[], staticButtons=[] }) => {
  return (
    <NavbarContainer className="navbar">
      <NavBarSubContainer >
        {navItems?.length ? (
        navItems.map((item) => (
          <Button
            key={item.key}
            onClick={item.onClick}
            customProps={item.customProps}
          >
            <StyledNavLink to={item.to || '/'}>
              {item.title}
            </StyledNavLink>
          </Button>
        ))
      ) : (
        <Box>no nav items</Box>
      )}
        </NavBarSubContainer>
        <Box>
          {staticButtons.length ? staticButtons.map((value)=>(<Button title={value.title} onClick={value.onClick} customProps={value.customProps}/>)) :<></>}
        </Box>
    </NavbarContainer>
  );
};

export default Navbar;
