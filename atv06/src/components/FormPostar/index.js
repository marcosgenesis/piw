import React,{useState} from "react";
import { useHistory } from "react-router-dom";
import {api} from '../../services/api'
import {decode} from 'jsonwebtoken'
import {useAuthentication} from '../../hooks/useAuthentication'

import { FormContainer } from "./styles";

function FormPostar() {
  const [post,setPost] = useState('')
  const history = useHistory();
  const {token} = useAuthentication();
  async function newPost(e){
    e.preventDefault();
    try {
      const {id:userId} = decode(token)
      await api.post('/posts',{conteudo:post,likes:0,id_usuario:userId});
      history.push('/')
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <FormContainer>
      <input placeholder='Messagem' onChange={e=>setPost(e.target.value)}/>
      <button onClick={newPost}>Submeter</button>
    </FormContainer>
  );
}

export default FormPostar;
