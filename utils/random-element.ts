export const randomTypes = (array: any[]) => {
  // note: randomizing trick
  array?.sort(() => Math.random() - 0.5);
  return array;
};
