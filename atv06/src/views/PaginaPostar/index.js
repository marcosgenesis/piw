import React from "react";
import Header from "../../components/Header";
import FormPostar from "../../components/FormPostar";
import { Container } from "./styles";

function PaginaPostar() {
  return (
    <Container>
      <Header />
      <FormPostar/>
    </Container>
  );
}

export default PaginaPostar;
