export function render(post) { return ({
  id:post._id,
  conteudo:post.conteudo,
  usuario:post.id_usuario,
  comments:post.comments,
  likes:post.likes,
}); }