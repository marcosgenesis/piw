import React, { useState, useEffect } from "react";
import { decode } from "jsonwebtoken";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import { api } from "../../services/api";
import logo from "../../assets/logo.svg";
import { Container, Content, Actions, ActionItem, LoggedUser } from "./styles";

function Header() {
  const router = useHistory();
  const [userName, setUserName] = useState("");
  const { token } = useAuthentication();
  const logged = !!token;

  useEffect(() => {
    if (logged) {
      const tokenDecoded = decode(token);
      setUserName(tokenDecoded.name);
    }
  }, [logged, token]);

  return (
    <Container>
      <Content>
        <img src={logo} alt='logo maiself' />
        {logged && (
          <Actions>
            <ActionItem to='/' exact active={window.location.pathname === "/"}>
              Linha do tempo
            </ActionItem>
            <ActionItem
              to='/postar'
              active={window.location.pathname === "/postar"}
            >
              Postar
            </ActionItem>
          </Actions>
        )}
        {logged ? (
          <LoggedUser>{userName}</LoggedUser>
        ) : (
          <div>
            <button onClick={() => router.push("/cadastro")}>Cadastro</button>
            <button onClick={() => router.push("/login")}>login</button>
          </div>
        )}
      </Content>
    </Container>
  );
}

export default Header;
