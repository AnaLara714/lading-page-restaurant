import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const MainDiv = styled('div')({
  display: "flex",
  justifyContent: "center",
  "& .subtitle": {
    color: "#E4EEFF",
    marginTop: 29,
    marginBottom: 19,
  },
  "& .bannerMain": {
    height: 400,
    width: 500,
    marginLeft: 125,
  },
  "& .firstSection": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "& button": {
      width: 168,
      height: 58,
    },
  },

});
export const Title = styled(Typography)({
  fontWeight: 700,
  fontSize: 40,
  // width: 500,
  height: 144,
  lineHeight: "52px",
  color: "#FFFFFF",
});
