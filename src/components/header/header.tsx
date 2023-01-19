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
            <li><a href="#" target={"#"}>Cardápio</a></li>
            <li>
              <a href="#">Galeria</a>
                <ul>
                  <li><a href="#">Fotos</a></li>
                  <li><a href="#">Eventos</a></li>
                </ul>
            </li>
            <li><a href="#" target={"#"}>Sobre</a></li>
            <li><a href="#">Localização</a></li>
            <li><a href="#" target={"#"}>Contato</a></li>
          </ItemsNav>
        </nav>
        <ButtonOrderNow/>
      </HeaderDiv>
    
  );
};