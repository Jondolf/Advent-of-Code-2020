export function convertStringToObject(str: string): object {
  // Convert line breaks to spaces
  const formattedString = str.replace(/\n/g, ' ');
  // Split at spaces, convert into object with key-value pairs
  const converted = formattedString.split(' ').reduce((obj: { [key: string]: any; }, str) => {
    let strParts = str.split(':');
    if (strParts[0] && strParts[1]) {
      obj[strParts[0].replace(/\s+/g, '')] = strParts[1].trim();
    }
    return obj;
  }, {});
  return converted;
}
