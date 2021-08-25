import React,{useState,useEffect} from "react";
import Post from "../Post";
import { useAuthentication } from '../../hooks/useAuthentication';
import {api} from '../../services/api'

import { Container } from "./styles";

function LinhaDoTempo() {
  const { token } = useAuthentication();
  const [posts,setPosts] = useState([])

  useEffect(() => {
    if(token) {
      api.defaults.headers.token=token;
      console.log(api.defaults.headers.token)
      api.get('/posts').then(response => setPosts(response.data));
    }
  },[token])

  return (
    <Container>
      {!!token &&
        posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            sender={post.usuario.nome}
            conteudo={post.conteudo}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
    </Container>
  );
}

export default LinhaDoTempo;
