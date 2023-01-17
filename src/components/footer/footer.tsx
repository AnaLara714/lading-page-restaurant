import React from "react";
import { Emphasis, FooterDiv, ItemsNav, TextDescription } from "./footer.style";
import Logo from "assets/img/logo.png";
import Typography from "@mui/material/Typography";
import iconGithub from "assets/icon/github.svg";
import iconFigma from "assets/icon/figma.svg";
import iconFacebook from "assets/icon/facebook.svg";
import iconInstagram from "assets/icon/instagram.svg";

export const Footer: React.FC = () => {
  return(
    <FooterDiv>
      <div className="information">
        <div>
          <img src={Logo} className="logo"/>
          <TextDescription> 
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit, sed do eiusmod tempor incididunt ut labore et dolore .Learn more
          </TextDescription>
        </div>
        <Emphasis>HORARIO DE FUNCIONAMENTO</Emphasis>
        <div className="openHours">
          <div className="days">
            <Typography>Terça-feira a Domingo</Typography>
            <Typography>10:00 às 23:30</Typography>
          </div>
          <div className="days">
            <Typography>Segunda-feira</Typography> 
            <Typography>FECHADO</Typography>
          </div>
        </div>
      </div>
      <nav className="space-footer">
        <ItemsNav>
          <Typography>Navegação</Typography>
          <li><a href="#">Cardápio</a></li>
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Contato</a></li>
          <li><a href="#">Loacalização</a></li>
        </ItemsNav>
      </nav>
      <div className="socialNetworking">
        <Typography>Nossas Redes Sociais</Typography>
        <div>
          <img src={iconFacebook} className="iconGithub"/>
          <img src={iconInstagram} className="iconGithub"/>
        </div>
      </div>
      <Typography className="reservedRights">
        @2023 - Todos os direitos reservados
      </Typography>
      <Typography className="reservedRights">
          Desenvolvido por: @AnaLara714 <img src={iconGithub} className="iconsReservedRights"/> 
          | Projetado por: Isaac <img src={iconFigma} className="iconsReservedRights"/>
      </Typography> 
    </FooterDiv>
  );
};