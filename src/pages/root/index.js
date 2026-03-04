import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { ModalContext } from '../../context/modalContext';
import {RootContainer, OutletContainer} from './style'
import { buttonStyle, addButtonStyle, navItems} from './constant'

function Root() {
  const modalContext = useContext(ModalContext)
  
  const staticButtons = [ { 
    key:111,
    title: 'Add Task',
    onClick: modalContext.handleModalOpen,
    customProps: { ...addButtonStyle}
  }]

  return (
    <RootContainer style={{height:'100%'}}>
        <Navbar navItems={navItems} staticButtons={staticButtons}/>
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </RootContainer>
  );
}

export default Root;
