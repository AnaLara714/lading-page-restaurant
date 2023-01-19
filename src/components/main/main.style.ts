import React from "react";
import { styled } from "@mui/system";
import { TextField, Typography } from "@mui/material";

export const MainDiv = styled('div')({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column", 
  "& .subtitle": {
    color: "#E4EEFF",
    marginTop: 29,
    marginBottom: 19,
    "@media (max-width: 500px)": {
      marginTop: 0,
      marginBottom: 20,
      fontSize: 14,
      width: "80%",
      marginLeft: "5%",
    },
  },
  "& .bannerMain": {
    height: 400,
    width: 500,
    marginLeft: 125,
    "@media (max-width: 500px)": {
      height: 200,
      width: 300,
      marginLeft: 25,
    },
  },
  "& .firstSection": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
    "& button": {
      width: 168,
      height: 58,
      "@media (max-width: 500px)": {
        marginLeft: "25%",
        marginBottom: 20,
      },
    },
  },
  "& .titleSection": {
    fontSize: 28,
    fontWeight: 700,
    paddingTop: 45,
    paddingBottom: 25,
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    "@media (max-width: 500px)": {
      paddingTop: 20,
      paddingBottom: 15,
      fontSize: 20,
    },
  },
  "& .itemCarousel": {
    width: 600,
    height: 400,
  },
  "& .evaluationCards": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 45,
    flexWrap: "wrap",
  },
  "& .boxEmail": {
    background: "#FFFFFF",
    display: "flex",
    border: "none",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    width: "50%",
    height: "30%",
    padding: 10,
    "@media (max-width: 500px)": {
      width: "90%",
    },
  },
  "& .inputsInvalid": {
    "& input":  {
      border: "3px solid red",
      boxSizing: "border-box",
      borderRadius: 6, 
    },
  },
});
export const Title = styled(Typography)({
  fontWeight: 700,
  fontSize: 40,
  height: 144,
  lineHeight: "52px",
  color: "#FFFFFF",
  "@media (max-width: 500px)": {
    lineHeight: "32px",
    height: 80,
    fontSize: 20,
    marginLeft: "5%",
  },
});
export const SectionOtherColor = styled('section')({
  background: "#3B382C",
  color: "#FFFFFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});
export const DivEmail = styled('div')({
  marginTop: 65,
  marginBottom: 65,
  width: "80%",
  height: 210,
  borderRadius: 15,
  padding: 15,
  background: "#766F51",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  
});
export const InputEmail = styled(TextField)({
  background: "#FFFFFF",
  border: "none",
  marginRight: 15,
  width: 280,
  height: 30,
  outline: 0,
  marginTop: -20,
  "@media (max-width: 500px)": {
    width: "90%",
    fontSize: 14,
  },
});
export const ButtonEmail = styled('button')({
  background: "#EA6D27",
  color: "#FFFFFF",
  border: "none",
  boxShadow: "5px 5px 5px 1px rgba(0, 0, 0, 0.2)",
  borderRadius: 5,
  width: 95,
  height: 35,
  "@media (max-width: 500px)": {
    width: "45%",
    height: 35,
    fontSize: 12,
  },
});
