import { styled } from "@mui/material";

export const Form = styled('form')(({theme})=>({
    borderSpacing: theme.spacing(1),
    padding:'16px',
    boxSizing:'border-box',
    ':nth-child':{
        marginTop:'16px'
    }
}))

export const FieldRow = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  }));

export const Label = styled('label')(({theme})=>({
    display: 'block',
fontSize: '0.875rem',
lineHeight: '1.25rem',
fontWeight: '500',
color: '#374151',
marginBottom: '0.25rem'
}))

export const FieldLabel = styled('label')(({ theme }) => ({
    width: '140px',       // fixed label column
    marginBottom: 0,      // remove bottom margin; we align center
    marginRight: theme.spacing(2),
    textAlign: 'right',   // optional: right-align label text
    display: 'block',
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
    fontWeight: '500',
    color: '#374151',
    marginBottom: '0.25rem'  
}));

export const FieldControl = styled('div')(() => ({
    flex: 1,              // input column grows
  }));

export const TextInput = styled('input', {
  shouldForwardProp: (prop) => prop !== 'hasError',
})(({ theme, hasError }) => ({
  width: '100%',
  paddingLeft: '12px',
  paddingRight: '12px',
  paddingTop: '8px',
  paddingBottom: '8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: hasError ? theme.palette.error.main : '#d1d5db', // ~gray-300
  borderRadius: '8px',
  outline: 'none',
  boxSizing: 'border-box',
  '&:focus': {
    boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    borderColor: theme.palette.primary.main,
  },
}));

export const TextArea = styled('textarea')(({ theme }) => ({
  width: '100%',
  paddingLeft: '12px',
  paddingRight: '12px',
  paddingTop: '8px',
  paddingBottom: '8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#d1d5db', // ~gray-300
  borderRadius: '8px',
  outline: 'none',
  boxSizing: 'border-box',
  resize: 'vertical',
  fontFamily: 'inherit',
  '&:focus': {
    boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    borderColor: theme.palette.primary.main,
  },
}));

export const Select = styled('select')(({ theme }) => ({
  width: '100%',
  paddingLeft: '12px',
  paddingRight: '12px',
  paddingTop: '8px',
  paddingBottom: '8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#d1d5db', // ~gray-300
  borderRadius: '8px',
  outline: 'none',
  boxSizing: 'border-box',
  backgroundColor: 'white',
  '&:focus': {
    boxShadow: `0 0 0 2px ${theme.palette.primary.main}`,
    borderColor: theme.palette.primary.main,
  },
}));

export const ErrorText = styled('p')(({ theme }) => ({
  marginTop: '4px',
  fontSize: '12px',
  color: theme.palette.error.main,
}));

export const ActionsRow = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '12px',
  justifyContent: 'flex-end',
  paddingTop: '16px',
}));

export const SecondaryButton = styled('button')(({ theme }) => ({
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingTop: '8px',
  paddingBottom: '8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: '#d1d5db',
  borderRadius: '8px',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f9fafb', // ~gray-50
  },
}));

export const PrimaryButton = styled('button')(({ theme }) => ({
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingTop: '8px',
  paddingBottom: '8px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: theme.palette.primary.main,
  borderRadius: '8px',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
    borderColor: theme.palette.primary.dark,
  },
}));