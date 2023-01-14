import React from "react";
import { ButtonOrderNow, HeaderDiv, ItemsNav } from "./header.style";
import Logo from "assets/img/logo.png";


export const Header: React.FC = () => {
  return (
      <HeaderDiv>
        <img src={Logo} className="logo"/>
        <nav>
          <ItemsNav>
            <li><a href="#">Cardápio</a></li>
            <li><a href="#">Galeria</a></li>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Contato</a></li>
          </ItemsNav>
        </nav>
        <ButtonOrderNow>Peça agora</ButtonOrderNow> 
      </HeaderDiv>
    
  );
};