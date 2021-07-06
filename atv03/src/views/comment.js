export function render(comment) { return ({
  id:comment._id,
  texto:comment.texto,
  usuario:comment.id_usuario,
  post:comment.id_post,
}); }