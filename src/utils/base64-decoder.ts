export function base64DecodeUnicode(str: string) {
  return decodeURIComponent(
    Array.prototype.map
      .call(Buffer.from(str, 'base64'), function (c) {
        return '%' + ('00' + c.toString(16)).slice(-2);
      })
      .join(''),
  );
}
