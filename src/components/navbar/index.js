import React from 'react';
import { NavbarContainer, StyledNavLink } from './style';
import Button from '../button';

const Navbar = ({ navItems=[], staticButtons=[] }) => {
  return (
    <NavbarContainer className="navbar">
      <div style={{
        // flex:1,
        display:'flex',
        alignItems:'center',
        rowGap:'16px',
        columnGap:'16px',
        flexWrap:'wrap'
      }}>
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
        <>no nav items</>
      )}
        </div>
        <div>
          {staticButtons.length ? staticButtons.map((value)=>(<Button title={value.title} onClick={value.onClick} customProps={value.customProps}/>)) :<></>}
        </div>
    </NavbarContainer>
  );
};

export default Navbar;
