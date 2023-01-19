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
    marginRight: "8%",
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
    "@media (max-width: 1160px)": {
      marginTop: 0,
      marginLeft: 0,
      width: 0,
      height: 0,
      visibility: "hidden",
    },
  },
  
  "& .itemsHeader:hover": {
    display:"block",
  },
  "@media (max-width: 1100px)": {
    marginBottom: 25,
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
  "& li ul": {
    left: "38%",
    display: "none",
    position: "absolute",
  },
  "& li:hover ul, li.over ul": {
    display: "block",
    marginRight: 0,
  },
  "& li ul li": {
    display: "block",
    width: 0,
  },
  "@media (max-width: 500px)": {
    marginTop: 15,
    lineHeight: "25px",
  },
});

