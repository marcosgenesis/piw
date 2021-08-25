import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { api } from "../../services/api";
import Header from '../../components/Header'
import { Container } from "./styles";

function PaginaCadastro() {
  const router = useHistory();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await api.post("/usuarios", { name, email, password });
    router.push("/login");
  }

  return (
    <>
      <Header/>
    <Container>
      <form onSubmit={handleSubmit}>
        <p>Cadastre-se</p>
        <input placeholder='Nome' onChange={(e) => setName(e.target.value)} />
        <input placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder='Senha'
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Cadastrar</button>
      </form>
    </Container>
    </>
  );
}

export default PaginaCadastro;
