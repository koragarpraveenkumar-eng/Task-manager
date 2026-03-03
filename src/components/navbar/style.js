import { styled } from '@mui/material/styles';

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
  zIndex: 1000,
  '& .MuiTypography-root': {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: theme.palette.text.primary,
  },
}));

