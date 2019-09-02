// Basic query to object function
export const queryToObject = (search) => {
  if (!search) return {};
  // Remove "?" from query
  search = search.substr(1);
  return JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
}

export default queryToObject;
