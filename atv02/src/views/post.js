export function render(post) { return ({
  id:post._id,
  conteudo:post.conteudo,
  usuario:post.id_usuario,
  likes:post.likes,
}); }