import { Typography } from "@mui/material";
import React from "react";
import { Card } from "./evaluationCard.style";

export const EvaluationCard: React.FC = () => {
  return(
    <Card>
      <Typography className="name">
        Fulano
      </Typography>
      <Typography className="profession">
        Cliente 
      </Typography>
      <Typography>  
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac semper quam. 
        Interdum et malesuada fames ac ante ipsum primis in faucibus. 
      </Typography>
      <Typography>⭐⭐⭐⭐⭐</Typography>
    </Card>
  );
};