import { styled } from '@mui/material/styles';

export const ButtonContainer = styled('div')(({ theme, customProps }: { theme: Theme, customProps: React.CSSProperties }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),
    boxSizing: 'border-box',
    boxShadow: theme.shadows[1],
    ...customProps
}));
