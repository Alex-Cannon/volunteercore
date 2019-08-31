export const isAdmin = (user) => {
  if (user && user.data && user.data.roles && user.data.roles.indexOf("Admin") !== -1) {
    return true;
  };
  return false;
}