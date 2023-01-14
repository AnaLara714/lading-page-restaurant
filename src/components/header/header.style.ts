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
});

export const ButtonOrderNow = styled('button')({
  background: "#EA6D27",
  color: "#FFFFFF",
  width: 167,
  boxShadow: "5px 5px 5px 1px rgba(0, 0, 0, 0.2)",
  height: 64,
  marginTop: 63,
  borderRadius: "15px 3px 15px 3px",
  border: "none",
  fontSize: 18,
  marginLeft: "15%",
});