import React,{useEffect,useState} from "react";
import {api} from '../../services/api'
import {decode} from 'jsonwebtoken'
import {useAuthentication} from '../../hooks/useAuthentication'
import {
  Container,
  Actions,
  LikeButton,
  Sender,
  Message,
  Comments,
  Comment,NewComment
} from "./styles";

function Post({ sender, conteudo, likes, id}) {
  const [comments,setComments] = useState([]);
  const [commentText,setCommentText] = useState('');
  const {token} = useAuthentication();
  const {id:userId} = decode(token)

  function loadComments(){ 
    api.get(`/posts/${id}/comentarios`).then((response)=>setComments(response.data))
  }
  useEffect(()=>{
    loadComments()
  },[id])

  async function handleNewComment(){
    try {
      await api.post('/comentarios',{texto:commentText,id_post:id,id_usuario:userId})
      loadComments();
      setCommentText('')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <Sender>{sender}</Sender>
      <Message>{conteudo}</Message>
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
              <p className="message">{comment.texto}</p>
              <p className="author">{comment.usuario.nome}</p>
            </Comment>
          ))}
        </Comments>
      )}
      <NewComment placeholder="Escreva seu comentário" value={commentText} onChange={e=>setCommentText(e.target.value)} onKeyDown={ e => e.key === 'Enter' && handleNewComment()}/>
    </Container>
  );
}

export default Post;
