import React from "react";
import { styled } from "@mui/system";
import { Typography } from "@mui/material";

export const Card = styled('div')({
  background: "#FFFFFF",
  border: "none",
  display: "flex",
  flexDirection: "column",
  boxShadow: "5px 5px 5px 1px rgba(0, 0, 0, 0.2)",
  padding: 15,
  borderRadius: 15,
  opacity: 0.95,
  width: 220,
  height: 230,
  "& .name": {
    fontWeight: 700,
  }, 
  "& .profession": {
    fontStyle: "italic",
    opacity: 0.75,
    fontSize: 14,
    marginBottom: 10,
  },
  "@media (max-width: 500px)": {
    marginBottom: 15,
  },
});


