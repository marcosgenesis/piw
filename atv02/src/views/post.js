export function render(user) { return ({
  id:user._id,
  conteudo:user.conteudo,
  usuario:user.id_usuario,
  likes:user.likes,
}); }