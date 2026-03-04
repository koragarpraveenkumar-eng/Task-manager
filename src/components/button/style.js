import { styled } from '@mui/material/styles';

export const ButtonContainer = styled('button')(({ theme, customProps }: { theme: Theme, customProps: React.CSSProperties }) => ({
    boxSizing: 'border-box',
    boxShadow: theme.shadows[1],
    ...customProps
}));
