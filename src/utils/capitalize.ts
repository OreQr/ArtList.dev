export const capitalize = (text: string) => {
  if (text.length <= 0) {
    return "";
  }

  return text[0].toUpperCase() + text.slice(1);
};
