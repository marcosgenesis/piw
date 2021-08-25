import React,{useEffect} from "react";
import Header from "../../components/Header";
import { useHistory } from "react-router-dom";
import { useAuthentication } from "../../hooks/useAuthentication";
import LinhaDoTempo from "../../components/LinhaDoTempo";
import { Container } from "./styles";

function PaginaFeed() {
  const history = useHistory();
  const { token } = useAuthentication();
  useEffect(() => {
    const logged = !!token;
    console.log(logged)
    if (logged === false) {
      history.push("/login");
    }
  }, [history, token]);
  return (
    <Container>
      <Header />
      <LinhaDoTempo />
    </Container>
  );
}

export default PaginaFeed;
