import React, { Fragment } from "react";
import Modal from './Modal';
import useInput from "../hooks/use-input";

import classes from "./Modal.module.css";

// kod Jakuba

// export enum InputType {
//   email = "email",
//   password = "password",
// }


const ModalLogIn: React.FC<{
  onHideModal: () => void;
  onShowModal: () => void;
}> = (props) => {
  const Backdrop: React.FC<{ onHideModal: () => void }> = (props) => {
    return (
      <div className={classes.backdrop_login} onClick={props.onHideModal} />
    );
  };

  // kod Jakuba

  // const validate = (value: string, inputType: InputType) => {
  //   const isInvalid = value.trim().length === 0;
  //   switch (inputType) {
  //     case InputType.email:
  //       setEmailIsValid(!isInvalid);
  //       break;
  //     case InputType.password:
  //       setPasswordIsValid(!isInvalid);
  //       break;
  //   }
  // };

  const {
    isValid: enteredPasswordIsValid,
    value: enteredPassword,
    hasError: enteredPasswordError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordInputBlur,
    reset: lastNameReset,
  } = useInput((value: string) => value.trim() !== "");

  const {
    isValid: enteredEmailIsValid,
    value: enteredEmail,
    hasError: enteredEmailError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlur,
    reset: emailReset,
  } = useInput((value: string) =>
    value.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  );

  let formIsValid = false;
  if (enteredPasswordIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (FormEvent: any) => {
    FormEvent.preventDefault();

    if (!enteredPassword) {
      return;
    }
    if (!enteredEmailIsValid) {
      return;
    }
    console.log(enteredPassword, enteredEmail);

    lastNameReset();
    emailReset();
  };

  return (
    <Fragment>
      {<Backdrop onHideModal={props.onHideModal} />}
      <Modal onShowModal={props.onShowModal}>
        <form
          className={classes.control_group}
          onSubmit={formSubmissionHandler}
        >
          <div className={classes.input}>
            <label htmlFor="email">E-Mail</label>
            <input
              className={`${classes["input"]} ${
                enteredEmail && classes.invalid
              }`}
              id="email"
              type="text"
              value={enteredEmail}
              onChange={emailChangeHandler}
              onBlur={emailInputBlur}
              placeholder="Enter your E-mail-Adress"
            ></input>
            {enteredEmailError && (
              <p className={classes.error_text}>Check your email.</p>
            )}
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordInputBlur}
              placeholder="Enter your password"
            ></input>
            {enteredPasswordError && (
              <p className={classes.error_text}>Check your password.</p>
            )}
            <div className={classes.buttons_input}>
              <button disabled={!formIsValid} className={classes.button}>
                Log in
              </button>
              <button className={classes.button} onClick={props.onHideModal}>
                Close
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </Fragment>
  );
};

export default ModalLogIn;
