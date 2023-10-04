export const modsClasses = (styles: { [key: string]: string }, mods: { [key: string]: string | undefined }) =>
  Object.keys(mods).map((key) => styles[`${key}-${mods[key]}`]);

export default modsClasses;
