import { buttonStyle } from '../../constants/styleConstants'
  
  export const addButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'green',
    color: 'white',
    padding: '10px',
    boxSizing: 'border-box',
    '&:hover': {
      // backgroundColor: 'red',
    },
  }
  
 export const navItems = [
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
  