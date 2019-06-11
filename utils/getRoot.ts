export default (id: string = 'root') => {
  const root = document.getElementById(id);
  if (!root) throw new Error('Could not find element with id="root"');

  return root;
};
