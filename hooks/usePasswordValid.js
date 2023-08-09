import { useState, useEffect } from "react";

export const usePasswordValid = (email, options) => {
  let validIfEmpty = true;
  if (options) {
    validIfEmpty = options.validIfEmpty;
  }
  const [isValid, setIsValid] = useState(validIfEmpty);
  const [absoluteValid, setAbsoluteValid] = useState(false);

  const validate = () => {
    // Password must be 8 or more characters
    if (email.length === 0 && validIfEmpty) {
      setIsValid(true);
      return;
    }

    if (email.length >= 8) {
      setIsValid(true);
      setAbsoluteValid(true);
    } else {
      setIsValid(false);
      setAbsoluteValid(false);
    }
  };

  useEffect(() => {
    validate();
  }, [email]);

  return { isValid, validate, absoluteValid };
};
