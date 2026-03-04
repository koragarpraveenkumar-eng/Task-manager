import { styled } from '@mui/material/styles';

export const Box = styled('div')(({theme})=>({}))
export const SummaryCardContainer = styled('div')(({theme})=>({
    flex:1,
    backgroundColor: theme.palette.common.white,   // bg-white
    borderRadius: theme.spacing(3),                // rounded-xl (~24px)
    boxShadow: theme.shadows[3],                   // shadow-md
    padding: theme.spacing(3),                     // p-6 (24px)
    textAlign: "center",
}))

