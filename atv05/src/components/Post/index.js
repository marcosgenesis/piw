import React from "react";

import {
  Container,
  Actions,
  LikeButton,
  Sender,
  Message,
  Comments,
  Comment,NewComment
} from "./styles";

function Post({ sender, message, likes, comments }) {
  return (
    <Container>
      <Sender>{sender}</Sender>
      <Message>{message}</Message>
      <Actions>
        <p>{likes} likes</p>
        <LikeButton>Curtir</LikeButton>
      </Actions>
      {comments.length === 0 ? (
        <p className="noComment">Nenhum comentário</p>
      ) : (
        <Comments>
          {comments.map((comment) => (
            <Comment key={comment.id}>
              <p className="message">{comment.text}</p>
              <p className="author">{comment.author}</p>
            </Comment>
          ))}
        </Comments>
      )}
      <NewComment placeholder="Escreva seu comentário"/>
    </Container>
  );
}

export default Post;
