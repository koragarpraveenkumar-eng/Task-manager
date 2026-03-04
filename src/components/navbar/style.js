import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';


export const NavbarContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexWrap: 'wrap',
  padding: theme.spacing(2),
  boxSizing: 'border-box',
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[1],
  width: '100%',
  height: '90px',
  zIndex: 1,
  '& .MuiTypography-root': {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
  position:'fixed',
  top:'0px'
}));

export const StyledNavLink = styled(NavLink)(({ theme }) => ({
  width:'100%',
  textDecoration: "none",
  padding: theme.spacing(1.5, 3),
  boxSizing:'border-box',
  borderRadius: theme.spacing(1),
  display: "inline-block",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.common.white,
  transition: "0.3s ease",

  "&.active": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));