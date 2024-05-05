export const email = (value: string) => {
  if (!value) return false;
  if (!value.includes('@')) return false;
  if (!value.includes('.')) return false;
  if (value.split('@')[0].length < 2) return false;
  if (value.split('@')[1].length < 3) return false;
  if (value.split('@')[1].split('.')[0].length < 2) return false;
  if (value.split('@')[1].split('.')[1].length < 2) return false;
  return true;
};
