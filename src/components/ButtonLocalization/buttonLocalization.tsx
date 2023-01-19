import React from "react";
import { Localization } from "./buttonLocalization.style";

export const ButtonLocalization: React.FC = () => {
  const onLocalizationClickButton = () => {
    window.open("https://www.google.com.br/maps/")
  }
  return(
    <>
      <Localization
        onClick={onLocalizationClickButton}
      >
        Veja nossa localização, estamos aqui! 
      </Localization>
    </>
  );
};