import { styled } from "@mui/material/styles";

export const Box = styled('div')(({theme, customProps})=>({
    width:'100%',
    height:'100%',
    ...customProps
}))
export const ModalContainer = styled('div')(({theme, display})=>({
    position:'fixed',
    top:'0',
    left:0,
    right:0,
    bottom:0,
    zIndex:2,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display:display,
}))

export const ModalSubContainer = styled('div')(({theme})=>({
    width:'80%',
    // minHeight:'20%',
    backgroundColor:'white',
    overflow:'auto',
}))