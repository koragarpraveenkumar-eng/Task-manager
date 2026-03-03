import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar';
import { ModalContext } from '../../context/modalContext';


const buttonStyle = { 
  height: '100%', 
  width:'100px',
  borderRadius: '10px',
  boxSizing: 'border-box',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: 'white',
}

const addButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'green',
  color: 'white',
  padding: '10px',
  boxSizing: 'border-box',
  '&:hover': {
    // backgroundColor: 'red',
  },
}

const navItems = [
  { key:1,
    title: 'All',
    to:'/',
    onClick: () => { console.log('All') }, 
  customProps: { ...buttonStyle} 
  },
  { 
    key:2,
    title: 'Pending', 
    to:'/pending',
    onClick: () => { console.log('Pending') },
    customProps: { ...buttonStyle}
  },
  { 
    key:3,
    title: 'Processing',
    to:'/processing',
    onClick: () => { console.log('Processing') },
    customProps: { ...buttonStyle}
  },
  { 
    key:4,
    title: 'Completed',
    to:'/completed',
    onClick: () => { console.log('Completed') }, 
    customProps: { ...buttonStyle} 
  },
 
];


function Root() {
  const modalContext = useContext(ModalContext)
  const staticButtons = [ { 
    key:111,
    title: 'Add Task',
    onClick: modalContext.handleModalOpen,
    customProps: { ...addButtonStyle}
  }]
  return (
    <div>
      <div>
        <Navbar navItems={navItems} staticButtons={staticButtons}/>
      </div>
      <div style={{
        width:'100%',
        height:'100%',
        overflow:'auto'
      }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
