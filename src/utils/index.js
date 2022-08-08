export const isEmpty = (val) => {
  if (
    Object.keys(val).length === 0 ||
    val === undefined ||
    val === null ||
    val.length === 0
  )
    return true;
  return false;
};
