import React from "react";
import Post from "../Post";
import { Container } from "./styles";

const posts = [
  {
    id: 1,
    nomeUsuario: "Jão Gomes",
    texto:
      "Pense no calor do diaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacho",
    likes: 4,
  },
  {
    id: 2,
    nomeUsuario: "Mario Gomes",
    texto: "Odeio a piada do Mario!!!",
    likes: 4000,
  },
];

function LinhaDoTempo() {
  return (
    <Container>
      {posts.map((post) => (
        <Post
          key={post.id}
          sender={post.nomeUsuario}
          message={post.texto}
          likes={post.likes}
        />
      ))}
    </Container>
  );
}

export default LinhaDoTempo;
