export const validateContactForm = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length < 2) {
    errors.name = "Must be at least 2 characters.";
  } else if (values.name.length > 25) {
    errors.name = "Must be 25 characters or less";
  }

  const reg = /^\d+$/;
  if (!reg.test(values.phoneNum)) {
    errors.phoneNum = "The phone number should contain only numbers.";
  }

  if (!values.email.includes("@")) {
    errors.email = "Email should contain a @";
  }

  if (!values.description) {
    errors.description = "Required";
  } else if (values.description.length < 20) {
    errors.description =
      "Your tattoo description must have at least 20 characters";
  } else if (values.description.length > 280) {
    errors.description = "Like a tweet, your tattoo description must be 280 characters or less!";
  }

  return errors;
};
