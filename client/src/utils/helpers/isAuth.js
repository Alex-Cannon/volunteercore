export const isAuth = (user) => {
  if (user && user.result && user.result.id && !isNaN(user.result.id)) {
    return true;
  }
  return false;
}