import React from 'react';
import { Header } from 'components/header';
import { Content } from './LandingPage.style';
import { Footer } from 'components/footer';
import { Main } from 'components/main';


export const LandingPage: React.FC = () => {
  return (
    <Content>
      <Header/>
      <Main/>
      <Footer/>
    </Content>
  );
};
