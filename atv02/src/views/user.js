export function render(user) { return ({
  id:user._id,
  nome:user.nome,
  email:user.email,
}); }