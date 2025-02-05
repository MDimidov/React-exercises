export function nCharactersLong(field, value, n) {
  if (value.length < n) {
    return `${field} should be at least ${n} characters long!`;
  } else {
    return "";
  }
}

export function fieldIsNotValid(field, value) {
  const emailPattern = /^[A-Za-z0-9_\.]+@[A-Za-z]+\.[A-Za-z]{2,3}$/;
  const urlPattern = /^https?:\/\/.+/;
  const phonePattern = /^0[1-9]{1}[0-9]{8}$/;

  if (
    (field === "Email" && !value.match(emailPattern)) ||
    (field === "Image Url" && !value.match(urlPattern)) ||
    (field === "Phone number" && !value.match(phonePattern))
  ) {
    return `${field} is not valid!`;
  } else {
    return "";
  }
}

export function numberWrong(field, value) {
  const digitPattern = /^\d+$/;
  const isNumber = digitPattern.test(value);

  if (Number(value) <= 0 || !isNumber) {
    return `${field} should be a positive number!`;
  } else {
    return "";
  }
}
