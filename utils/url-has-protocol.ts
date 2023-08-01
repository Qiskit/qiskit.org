export const urlHasProtocol = (url: string) => {
  const PROTOCOL_REGEX = /^\w{2,}:([/\\]{2})?/;
  const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;

  return PROTOCOL_REGEX.test(url) || PROTOCOL_RELATIVE_REGEX.test(url);
};
