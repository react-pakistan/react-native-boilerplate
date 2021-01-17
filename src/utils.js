export const resolveToSentenceCase = (str) => {
  const chunks = str.split('_');
  const displayName = chunks.map((item) => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()).join(' ');
  return displayName;
};
