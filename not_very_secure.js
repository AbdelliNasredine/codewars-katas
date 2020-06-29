function alphanumeric(string) {
  const regex = /^[0-9a-z]+$/gi;
  const match = string.match(regex);
  console.log(match, regex.test(string));
}

alphanumeric("    ");
