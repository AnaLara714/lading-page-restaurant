import React from "react";
import { styled } from "@mui/system";

export const HeaderDiv = styled('div')({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "100%",
  justifyContent: "center",
  alignItems: "center", 
  color: "#FFFFFF",
  "& .logo": {
    height: 55,
    width: 198,
    marginTop: 56,
    marginRight: "15%",
    "@media (max-width: 500px)": {
      marginRight: 0,
      marginTop: 26,
      width: 170,
      height: 46,
    },
  },
  "& button": {
    marginTop: 63,
    marginLeft: "15%",
    "@media (max-width: 500px)": {
      marginLeft: 0,
      width: 117,
      height: 42,
    },
  },
});

export const ItemsNav = styled('ul')({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  marginTop: 82,
  "& li": {
    listStyle: "none",
    marginRight: 45,
  },
  "& a": {
    color: "#FFFFFF",
    textDecoration: "none",
  },
  "@media (max-width: 500px)": {
    marginTop: 0,
  },
});

