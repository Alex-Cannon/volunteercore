export const isAdmin = (user) => {
  if (!user) return false;
  return user.data && user.data.roles && user.data.roles.indexOf("Admin") !== -1;
}