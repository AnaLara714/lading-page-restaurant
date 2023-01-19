import React from "react";
import Banner from "assets/img/bannerMainSC.png";
import { Typography } from "@mui/material";
import { ButtonOrderNow } from "components/ButtonOrderNow";
import { ButtonEmail, DivEmail, InputEmail, MainDiv, SectionOtherColor, Title } from "./main.style";
import { ButtonLocalization } from "components/ButtonLocalization";
import { Carousel, CarouselItem } from "components/Carousel/carousel";
import { EvaluationCard } from "components/EvaluationCard";
import PhotoRestaurant1 from "assets/img/restaurante1.jpg";
import PhotoRestaurant2 from "assets/img/restaurante2.jpg";
import PhotoRestaurant3 from "assets/img/restaurante3.jpg";
import PhotoRestaurant4 from "assets/img/restaurante4.jpg";

export const Main: React.FC = () => {
  const [validEmail, setValidEmail] = React.useState(true);
  const [button, setButton] = React.useState(true);

  const onEmailInputChange = (event: any) => {
    const emailRegex = /^\w+@[a-z]+(\.[a-z]+)+$/;
    const email = event.target.value;
    setValidEmail(false);
    if(emailRegex.test(email) || email === "")  {
      setValidEmail(true);
      setButton(false);
      console.log(validEmail);
    };
  }; 
  const onRegisterButtonClick = () => {
    alert("Cadastro feito com sucesso! Seja bem-vindo(a)!  :)");
  };

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
      <SectionOtherColor className="secondSection">
        <Typography className="titleSection">Conheça o nosso lugar!</Typography>
        <Carousel>
          <CarouselItem><img src={PhotoRestaurant1} className="itemCarousel"/></CarouselItem>
          <CarouselItem><img src={PhotoRestaurant2} className="itemCarousel"/></CarouselItem>
          <CarouselItem><img src={PhotoRestaurant3} className="itemCarousel"/></CarouselItem>
          <CarouselItem><img src={PhotoRestaurant4} className="itemCarousel"/></CarouselItem>
        </Carousel>
        <ButtonLocalization/>
      </SectionOtherColor>
      <section>
        <Typography className="titleSection">Avaliações</Typography>
        <div className="evaluationCards">
          <EvaluationCard></EvaluationCard>
          <EvaluationCard></EvaluationCard>
          <EvaluationCard></EvaluationCard>
        </div>
      </section>
      <SectionOtherColor className="thirdSection">
        <DivEmail>
          <Typography className="titleSection">
            Obtenha promoções e novidades se inscrevendo na nossa Newsletter
          </Typography>
          <div className="boxEmail">
            <InputEmail 
              placeholder="Email"
              className={validEmail ? "inputsValid" : "inputsInvalid"}
              helperText={!validEmail ? "Insira um e-mail válido." : ""}
              onChange={onEmailInputChange}
            />
            <ButtonEmail
              onClick={onRegisterButtonClick}
              disabled={button}
            >Inscreva-se</ButtonEmail>
          </div>
        </DivEmail>
      </SectionOtherColor>
    </MainDiv>
  );
};