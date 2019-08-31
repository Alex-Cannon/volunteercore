export const isAuth = (user) => {
  if (user && user.data && user.data.id && !isNaN(user.data.id)) {
    return true;
  }
  return false;
}