import React from "react";
import { HeaderDiv, ItemsNav } from "./header.style";
import { ButtonOrderNow } from "components/ButtonOrderNow";
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
        <ButtonOrderNow/>
      </HeaderDiv>
    
  );
};