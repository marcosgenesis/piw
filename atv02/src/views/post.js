export function render(user) { return ({
  id:user._id,
  conteudo:user.conteudo,
  likes:user.likes,
}); }