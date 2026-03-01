import React from 'react';
import { NavbarContainer } from './style';
import Button from '../button';
import { NavLink } from 'react-router-dom';

const Navbar = ({ navItems }) => {
  return (
    <NavbarContainer className="navbar">
      {navItems?.length ? (
        navItems.map((item) => (
          <Button
            key={item.key}
            onClick={item.onClick}
            customProps={item.customProps}
          >
            <NavLink
              to={item.to || '/'}
              style={({ isActive }) => ({
                textDecoration: 'none',
                backgroundColor: isActive ? 'blue' : 'white',
                color: isActive ? 'white' : 'black',
              })}
            >
              {item.title}
            </NavLink>
          </Button>
        ))
      ) : (
        <>no nav items</>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
