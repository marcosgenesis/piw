const express = require('express');
var router = express.Router();

const usuarios = [];
const posts = [];

router.post('/usuarios', (req, res)=>{
  const {nome,email,senha} = req.body;
  const user = {
    id:usuarios.length+1,
    nome,
    email,
    senha
  };
  
  usuarios.push(user)
  
  return res.json(user);
});

router.get('/usuarios',(req, res) => {
  return res.json(usuarios);
})

router.get('/usuarios/:id',(req, res) => {
  const {id} = req.params;
  const findUser = usuarios.find(user => user.id.toString() === id);
  
  if (!findUser) return res.status(404).json({error:'user not found'})
  return res.json(findUser);
})

router.delete('/usuarios/:id',(req, res) => {
  const {id} = req.params;
  const findUserIndex = usuarios.findIndex(user => user.id.toString() === id);
  
  if (findUserIndex<0) return res.status(404).json({error:'user not found'})
  usuarios.splice(findUserIndex,1);
  return res.status(201).json();
})

// --- POSTS ---


router.post('/posts', (req, res)=>{
  const {texto,likes} = req.body;
  const post = {
    id:posts.length+1,
    texto,
    likes,
  };
  
  posts.push(post)
  
  return res.json(post);
});

router.get('/posts',(req, res) => {
  return res.json(posts);
})

router.get('/posts/:id',(req, res) => {
  const {id} = req.params;
  const findPost = posts.find(post => post.id.toString() === id);
  
  if (!findPost) return res.status(404).json({error:'post not found'})
  return res.json(findPost);
})

router.delete('/posts/:id',(req, res) => {
  const {id} = req.params;
  const findPostIndex = posts.findIndex(post => post.id.toString() === id);
  
  if (findPostIndex<0) return res.status(404).json({error:'post not found'})
  posts.splice(findPostIndex,1);
  return res.status(201).json();
})

module.exports = router;