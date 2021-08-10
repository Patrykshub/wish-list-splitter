import { useState } from "react";

const useInput = (validateValue: any) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (FormEvent:any) => {
    setEnteredValue(FormEvent.target.value);
  };
  const inputBlurHandler = (FormEvent:any) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    isValid: valueIsValid,
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;