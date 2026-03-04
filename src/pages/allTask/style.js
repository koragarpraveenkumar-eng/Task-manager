import { styled } from "@mui/material/styles";

export const ResponsiveGrid = styled("div")(({ theme }) => ({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // default (xs)
  
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
    },
  
    gap: theme.spacing(2),   // gap-4 ≈ 16px
    marginBottom: theme.spacing(4), // mb-8 ≈ 32px
  }));

  export const StyledSelect = styled("select")(({ theme }) => ({
    padding: theme.spacing(1.5),
    borderRadius: theme.spacing(1),
    border: `1px solid ${theme.palette.grey[400]}`,
    fontSize: "16px",
    outline: "none",
    cursor: "pointer",
    backgroundColor: theme.palette.common.white,
    transition: "0.2s",
  
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  }));

  export const FilterContainer = styled("div")(()=>({
    display:'flex',
    columnGap:'16px',
    alignItems:'center',
    textAlign:'center'
  }))