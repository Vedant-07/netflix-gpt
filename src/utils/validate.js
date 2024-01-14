export const checkValidData = (email, pwd, name) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPwdValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      pwd
    );

  if (name) {
    const isNameValid = /^[a-zA-Z\s]+$/.test(name);
    if (!isNameValid) return "Name is invalid. Use letters & spaces.";
  }

  if (!isEmailValid) return " email is invalid ";

  if (!isPwdValid) return " password is invalid ";

  return null;
};
