export const validateLoginInputField = (fullName, email, password) => {
  const fullNameRegex = /^(?! )[A-Za-z\s]{2,30}(?<! )$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,16}$/;

  // Only validate fullName if it's provided (i.e., not null)
  if (!fullNameRegex.test(fullName))
    return "Full Name Required (2-30 characters, letters and spaces only, no leading/trailing spaces)";
  if (!emailRegex.test(email)) return "Invalid Email";
  if (!passwordRegex.test(password))
    return "Password must be 6-16 characters, contain at least one uppercase letter, one lowercase letter, one number, and one special character";

  return null;
};
