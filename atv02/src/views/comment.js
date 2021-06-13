export function render(user) { return ({
  id:user._id,
  texto:user.texto,
  usuario:user.id_usuario,
  post:user.id_post,
}); }