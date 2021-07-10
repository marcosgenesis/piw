import React from "react";

import { Container, Actions, LikeButton,Sender,Message } from "./styles";

function Post({ sender, message, likes }) {
  return (
    <Container>
      <Sender>{sender}</Sender>
      <Message>{message}</Message>
      <Actions>
        <p>{likes} likes</p>
        <LikeButton>Curtir</LikeButton>
      </Actions>
    </Container>
  );
}

export default Post;
