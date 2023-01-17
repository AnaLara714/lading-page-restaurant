import React from "react";
import Banner from "assets/img/bannerMainSC.png";
import { Typography } from "@mui/material";
import { ButtonOrderNow } from "components/ButtonOrderNow";
import { MainDiv, Title } from "./main.style";

export const Main: React.FC = () => {
  return(
    <MainDiv>
      <section className="firstSection">
        <div>
          <Title>
            Nós fornecemos a <br/> melhor comida para você
          </Title> 
          <Typography className="subtitle">
            O sabor com gosto de felicidade e satifação 
            que você merece! 
          </Typography>
          <ButtonOrderNow/>
        </div>
        <img src={Banner} className="bannerMain"/> 
      </section>
    </MainDiv>
  );
};