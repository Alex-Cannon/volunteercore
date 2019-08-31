export const isAuth = (user) => {
  if (!user) return false;
  return user.data && user.data.id;
}