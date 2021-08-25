import React, { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import {useAuthentication} from '../../hooks/useAuthentication'
import { Container } from "../paginaCadastro/styles";
import Header from "../../components/Header";

function PaginaLogin() {
  const {setToken,token} = useAuthentication();
  const router = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  useEffect(() => {
    const logged = !!token;
    console.log(logged)
    if (logged) {
      history.push("/");
    }
  }, [history, token]);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/usuarios/signin", { email, password });
    setToken(response.data.token);
    localStorage.setItem("piw.token",response.data.token)
    router.push("/");
  }

  return (
    <>
    <Header/>
    <Container>
      <form onSubmit={handleSubmit}>
        <p>Faça o login</p>
        <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder='Senha'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Entrar</button>
      </form>
    </Container>
    </>
  );
}

export default PaginaLogin;
