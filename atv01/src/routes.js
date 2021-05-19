const express = require('express');
var router = express.Router();

const usuarios = [];

router.post('/usuarios', (req, res)=>{
  const {name,email,senha} = req.body;
  const user = {
    id:usuarios.length+1,
    name,
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

module.exports = router;