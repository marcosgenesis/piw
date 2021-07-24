import React from "react";

import logo from "../../assets/logo.svg";
import { Container,Content, Actions,ActionItem, LoggedUser } from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt='logo maiself' />
        <Actions>
          <ActionItem to='/' exact active={window.location.pathname === '/'} >Linha do tempo</ActionItem>
          <ActionItem to='/postar' active={window.location.pathname === '/postar'}>Postar</ActionItem>
        </Actions>
        <LoggedUser>Marcos Gênesis</LoggedUser>
      </Content>
    </Container>
  );
}

export default Header;
