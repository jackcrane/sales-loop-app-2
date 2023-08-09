import { useState, useEffect } from "react";

export const useEmailValid = (email, options) => {
  let validIfEmpty = true;
  if (options) {
    validIfEmpty = options.validIfEmpty;
  }
  const [isValid, setIsValid] = useState(validIfEmpty);
  const [absoluteValid, setAbsoluteValid] = useState(false);

  const validate = () => {
    const emailRegex =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const isEmpty = email.trim() === "";

    if (validIfEmpty && isEmpty) {
      setIsValid(true);
    } else {
      setIsValid(emailRegex.test(email));
    }

    setAbsoluteValid(emailRegex.test(email));
  };

  useEffect(() => {
    validate();
  }, [email]);

  return { isValid, validate, absoluteValid };
};
