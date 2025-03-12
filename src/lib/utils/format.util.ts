export function removeHtmlTagFromString(str: string) {
  return str.replace(/<\/?[^>]+(>|$)/g, "");
}
