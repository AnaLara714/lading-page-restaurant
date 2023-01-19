import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const DivCarousel = styled('div')({
  overflow: "hidden",
  width: "45%",
  marginBottom: 45,
  "@media (max-width: 500px)": {
    width: "80%",
  },
});
export const Div = styled('div')({
  display: "flex",
  justifyContent: "center",
  "& button": {
    marginRight: 5,
    marginTop: 10,
    borderRadius: 3,
    width: 60,
    height: 30,
    border: "none",
    color: "#FFFFFF",
    background: "#EA6D27",
  },
});
export const DivInner = styled('div')({
  whiteSpace: "nowrap",
  transition: "transform 0.3s",
  "@media (max-width: 500px)": {
    height: "20%",
  },
});
export const DivItem = styled('div')({
  height: "50%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "green",
  color: "#FFFFFF",
  "@media (max-width: 500px)": {
    height: "30%",
    width: "150%",
  },

});