import React from "react";

import logo from "../../assets/logo.svg";
import { Container,Content, Actions, PostButton, LoggedUser } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt='logo maiself' />
        <Actions>
          <a href='/'>Linha do tempo</a>
          <PostButton>Postar</PostButton>
        </Actions>
        <LoggedUser>Marcos Gênesis</LoggedUser>
      </Content>
    </Container>
  );
}

export default Header;
