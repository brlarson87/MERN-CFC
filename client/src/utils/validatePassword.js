const validatePassword = (password) => {
  const containsUppercase = /[A-Z]/.test(password);
  const containsNumber = /[0-9]/.test(password);
  const eightOrMoreChars = password.length >= 8;
  const containsSpecialChar = /[~`@!#$%^&*+=\-[\]\\';,/{}|\\":<>?]/g.test(
    password
  );

  return (
    containsNumber &&
    containsSpecialChar &&
    containsUppercase &&
    eightOrMoreChars
  );
};

export default validatePassword;
