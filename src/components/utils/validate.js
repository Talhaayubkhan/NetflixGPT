export const validateLoginInputField = (fullName, email, password) => {
  const fullNameRegex = /^(?! )[A-Za-z\s]{2,30}(?<! )$/;
  const emailRegex =
    /^[A-Za-z][A-Za-z0-9._%+-]*@[A-Za-z0-9-]+(?:\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,16}$/;

  if (!fullNameRegex.test(fullName))
    return "Full Name Required (2-30 characters, letters and spaces only, no leading/trailing spaces)";
  if (!emailRegex.test(email))
    return "Invalid Email (must start with a letter, valid domain, and TLD of letters only)";
  if (!passwordRegex.test(password))
    return "Password must be 6-16 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character";

  return null;
};
