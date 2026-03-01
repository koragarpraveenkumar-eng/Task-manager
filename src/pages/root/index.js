import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/navbar';


const buttonStyle = { 
  height: '40px', 
  borderRadius: '10px',
  padding: '10px', 
  boxSizing: 'border-box',
  margin: '10px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: 'red',
    color: 'white',
  },
}

const addButtonStyle = {
  ...buttonStyle,
  backgroundColor: 'green',
  color: 'white',
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
    key:1,
    title: 'Pending', 
    to:'/pending',
    onClick: () => { console.log('Pending') },
    customProps: { ...buttonStyle}
  },
  { 
    key:1,
    title: 'Processing',
    to:'/processing',
    onClick: () => { console.log('Processing') },
    customProps: { ...buttonStyle}
  },
  { 
    key:1,
    title: 'Completed',
    to:'/completed',
    onClick: () => { console.log('Completed') }, 
    customProps: { ...buttonStyle} 
  },
  { 
    key:1,
    title: 'Add Task',
    // to:'',
    onClick: () => { console.log('Add Task') },
    customProps: { ...addButtonStyle}
  },
];

// function handleOnClick(onClick) {
//   onClick();
// }


function Root() {
  return (
    <div>
      <header>
        <Navbar navItems={navItems} />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
