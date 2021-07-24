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
    comments: [
      { id: 1, text: "Caramba que massa!", author: "Junin das pirangage" },
      { id: 2, text: "Caramba que top!", author: "Junin das pirangage" },
      { id: 3, text: "Caramba que supimpa!", author: "Junin das pirangage" },
      { id: 4, text: "Caramba que rizivel!", author: "Junin das pirangage" },
    ],
  },
  {
    id: 2,
    nomeUsuario: "Mario Gomes",
    texto: "Odeio a piada do Mario!!!",
    likes: 4000,
    comments: [],
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
          comments={post.comments}
        />
      ))}
    </Container>
  );
}

export default LinhaDoTempo;
