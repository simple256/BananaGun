export function toCapitalizeFirstLetter(value: string): string {
  if (!value) {
    return '';
  }
  const firstLetter = value.slice(0, 1).toUpperCase();
  return firstLetter + value.slice(1, value.length);
}

export default toCapitalizeFirstLetter;
