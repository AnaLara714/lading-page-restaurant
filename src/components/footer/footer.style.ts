import React from "react";
import { styled } from "@mui/system";
import Typography from '@mui/material/Typography';

export const FooterDiv = styled('div')({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  height: "40%",
  justifyContent: "center",
  alignItems: "center", 
  color: "#FFFFFF",
  "& .logo": {
    height: 55,
    width: 198,
    marginTop: 56,
    marginRight: "15%",
  },
  "& .iconsReservedRights": {
    width: 33,
    height: 33,
    marginLeft: 5,
    marginRight: 5,
    "@media (max-width: 500px)": {
      width: 22,
      height: 22,
    },
  },
  "& .openHours": {
    color: "#E0EBFE",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontWeight: 400,
    fontSize: 16,
    marginTop: 15,
    lineHeight: "29px",
    width: "70%",
    "@media (max-width: 500px)": {
      width: "92%",
      marginTop: 0,
    },
  },
  "& .days": {
    display: "flex",
    flexDirection: "column",
  },
  "& .information": {
    "@media (max-width: 500px)": {
      display: "flex",
      flexWrap: "wrap",
      marginLeft: "5%",
    },
  },
  "& .reservedRights": {
    display: "flex",
    flexBasis: "100%",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
    padding: 10,
    "@media (max-width: 500px)": {
      justifyContent: "space-between",
      fontSize: 12,
    },
  },
  "& .space-footer": {
    marginLeft: "18%",
    marginRight: "18%",
    "@media (max-width: 1140px)": {
      marginLeft: "0%",
      marginRight: "10%",
    },
  },
  "& .socialNetworking" : {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginBottom: 106,
  },
});
export const TextDescription = styled(Typography)({
  width: 451,
  height: 90,
  fontSize: 16,
  fontWeight: 400,
  marginTop: 21,
  color: "#E4EEFF",
  lineHeight: "29px",
  "@media (max-width: 500px)": {
    width: 240,
    marginBottom: 45,
  },
});
export const Emphasis = styled(Typography)({
  fontWeight: 700,
  fontSize: 12,
  color: "#FFFFFF",
  lineHeight: "40px",
});
export const ItemsNav = styled('ul')({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  "& li": {
    listStyle: "none",
    lineHeight: "40px",
  },
  "& a": {
    color: "#E4EEFF",
    textDecoration: "none",
  },
  "@media (max-width: 500px)": {
    justifyContent: "flex-start",
  },
});