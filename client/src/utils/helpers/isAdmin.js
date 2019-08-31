export const isAdmin = (user) => {
  return user.roles && user.roles.indexOf("Admin") !== -1;
}