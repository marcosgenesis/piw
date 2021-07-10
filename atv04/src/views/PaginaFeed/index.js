import React from "react";
import Header from "../../components/Header";
import LinhaDoTempo from "../../components/LinhaDoTempo";
import { Container } from "./styles";

function PaginaFeed() {
  return (
    <Container>
      <Header />
      <LinhaDoTempo/>
    </Container>
  );
}

export default PaginaFeed;
